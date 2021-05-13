import { useEffect, useRef, useState } from 'react'
import { Button, Grid, IconButton, ListItemIcon, ListItemText, Menu, MenuItem } from '@mui/material'
import { Logout, PlayArrow, PlaylistPlay } from '@mui/icons-material/'
import PropTypes from 'prop-types'
import AlbumCover from './AlbumCover'
import SongDetails from './SongDetails'
import PlayerControls from './PlayerControls'
import Playlist from './Playlist'
import { useMediaQuery } from '../utils/useMediaquery'
import { playerStyles } from '../utils/style'
import playlistsArray from '../playlists.json'

export default function Player({ setAuthtoken }) {
    const audioEl = useRef(null)
    const isSmallScreen = useMediaQuery('(min-width:600px)')
    const [playlists] = useState(playlistsArray)
    const [selectedPlaylist, setSelectedPlaylist] = useState(0)
    const [songs, setSongs] = useState(playlists[0].songs)
    const [currentSongIndex, setCurrentSongIndex] = useState(0)
    const [isplaying, setIsplaying] = useState(false)
    const [isbuffering, setIsbuffering] = useState(false)
    const [anchorEl, setAnchorEl] = useState(null)
    const isMenuOpen = Boolean(anchorEl)

    useEffect(() => {
        document.getElementsByTagName('tr')[currentSongIndex].scrollIntoView()
    }, [currentSongIndex])

    const playFunc = () => { setIsplaying(true) }
    const pauseFunc = () => { setIsplaying(false) }
    const endedFunc = () => { skipSong(); setTimeout(() => { audioEl.current.play() }, 100) }
    const waitingFunc = () => { setIsbuffering(true) }
    const playingFunc = () => { setIsbuffering(false) }

    useEffect(() => {
        const audioElem = audioEl.current
        audioElem.addEventListener('play', playFunc)
        audioElem.addEventListener('pause', pauseFunc)
        audioElem.addEventListener('ended', endedFunc)
        audioElem.addEventListener('waiting', waitingFunc)
        audioElem.addEventListener('playing', playingFunc)

        let playPromise = isplaying ? audioElem.play() : audioElem.pause()
        if (playPromise) {
            playPromise
                .then(() => { /* Play/Pause sucessful */ })
                .catch(e => { /* Play/Pause failed */ })
        }

        if ('mediaSession' in navigator) {
            navigator.mediaSession.metadata = new window.MediaMetadata({
                title: songs[currentSongIndex].title,
                artist: songs[currentSongIndex].artists.join(', '),
                album: 'Faisal Akhtar',
                artwork: [
                    { src: songs[currentSongIndex].cover, sizes: '96x96', type: 'image/png' },
                    { src: songs[currentSongIndex].cover, sizes: '128x128', type: 'image/png' },
                    { src: songs[currentSongIndex].cover, sizes: '192x192', type: 'image/png' },
                    { src: songs[currentSongIndex].cover, sizes: '256x256', type: 'image/png' },
                    { src: songs[currentSongIndex].cover, sizes: '384x384', type: 'image/png' },
                    { src: songs[currentSongIndex].cover, sizes: '512x512', type: 'image/png' }
                ]
            })
            navigator.mediaSession.setActionHandler('play', () => { setIsplaying(true) })
            navigator.mediaSession.setActionHandler('pause', () => { setIsplaying(false) })
            navigator.mediaSession.setActionHandler('seekbackward', () => { skipSong(false) })
            navigator.mediaSession.setActionHandler('seekforward', () => { skipSong() })
            navigator.mediaSession.setActionHandler('seekto', () => { })
            navigator.mediaSession.setActionHandler('stop', () => { setCurrentSongIndex(0); setIsplaying(false) })
        }

        return () => {
            audioElem.removeEventListener('play', playFunc)
            audioElem.removeEventListener('pause', pauseFunc)
            audioElem.removeEventListener('ended', endedFunc)
            audioElem.removeEventListener('waiting', waitingFunc)
            audioElem.removeEventListener('playing', playingFunc)
        }
    })

    const skipSong = (forwards = true) => {
        if (forwards)
            setCurrentSongIndex(() => (currentSongIndex + 1 > songs.length - 1) ? 0 : currentSongIndex + 1)
        else setCurrentSongIndex(() => (currentSongIndex - 1 < 0) ? songs.length - 1 : currentSongIndex - 1)
        setTimeout(() => setIsplaying(true), 100)
    }

    const dynamicStyles = {
        info: {
            width: isSmallScreen ? 'calc(100% - 250px)' : 'calc(100% - 175px)',
            paddingLeft: isSmallScreen ? 25 : 10,
        },
        nextUp: {
            marginTop: 10,
            height: window.innerHeight > 500 ? 'calc(' + window.innerHeight + 'px - ' + (isSmallScreen ? '325' : '255') + 'px)' : '',
            overflow: 'auto',
            scrollBehavior: 'smooth',
        }
    }

    return (
        <>
            <audio src={songs[currentSongIndex].src} ref={audioEl} />
            <Grid component='main' style={playerStyles.main} container>
                <Grid component='div' style={playerStyles.playlist} container>
                    <IconButton>
                        <PlaylistPlay />
                    </IconButton>
                    <Button color='primary' onClick={e => setAnchorEl(e.currentTarget)}>{playlists[selectedPlaylist].name}</Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={isMenuOpen}
                        onClose={() => setAnchorEl(null)}
                        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
                        transformOrigin={{ vertical: 'top', horizontal: 'left' }}>
                        {playlists.map(
                            (playlist, ind) =>
                                <MenuItem
                                    key={playlist.id}
                                    selected={ind === selectedPlaylist}
                                    dense={true}
                                    onClick={() => {
                                        setSongs(playlists[ind].songs)
                                        setSelectedPlaylist(ind)
                                        setCurrentSongIndex(0)
                                        setAnchorEl(null)
                                    }}>
                                    {ind === selectedPlaylist ?
                                        (<>
                                            <ListItemIcon>
                                                <PlayArrow />
                                            </ListItemIcon>
                                            {playlist.name}
                                        </>)
                                        : <ListItemText inset>{playlist.name}</ListItemText>
                                    }
                                </MenuItem>
                        )}
                    </Menu>

                    <Button style={playerStyles.signOut} color='secondary' onClick={() => setAuthtoken(null)} variant='contained'>
                        <Logout fontSize={isSmallScreen ? 'medium' : 'small'} />
                    </Button>
                </Grid>

                <Grid component='div' style={playerStyles.banner} container>
                    <Grid item>
                        <AlbumCover
                            isbuffering={isbuffering}
                            isSmallScreen={isSmallScreen}
                            isplaying={isplaying}
                            {...songs[currentSongIndex]}
                        />
                    </Grid>

                    <Grid style={dynamicStyles.info} item>
                        <SongDetails
                            isSmallScreen={isSmallScreen}
                            {...songs[currentSongIndex]}
                        />
                        <PlayerControls
                            isSmallScreen={isSmallScreen}
                            isplaying={isplaying}
                            setIsplaying={setIsplaying}
                            skipSong={skipSong}
                        />
                    </Grid>
                </Grid>

                <Grid style={dynamicStyles.nextUp} component='div' container>
                    <Playlist
                        songs={songs}
                        setIsplaying={setIsplaying}
                        currentSongIndex={currentSongIndex}
                        setCurrentSongIndex={setCurrentSongIndex}
                    />
                </Grid>
            </Grid>
        </>
    )
}

Player.propTypes = {
    setAuthtoken: PropTypes.func.isRequired
}