import { useEffect, useRef, useState } from 'react'
import { Button, Grid } from '@mui/material'
import { Logout } from '@mui/icons-material/'
import PropTypes from 'prop-types'
import AlbumCover from './AlbumCover'
import SongDetails from './SongDetails'
import PlayerControls from './PlayerControls'
import Playlist from './Playlist'
import { useMediaQuery } from '../utils/useMediaquery'
import { playerStyles } from '../utils/style'
import songslist from '../songsList.json'

export default function Player({ setAuthtoken }) {
    const audioEl = useRef(null)
    const isSmallScreen = useMediaQuery('(min-width:600px)')
    const [songs] = useState(songslist)
    const [currentSongIndex, setCurrentSongIndex] = useState(0)
    const [isplaying, setIsplaying] = useState(false)
    const [isbuffering, setIsbuffering] = useState(false)

    useEffect(() => {
        document.getElementsByTagName('tr')[currentSongIndex].scrollIntoView()
        setIsplaying(true)
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
    }

    const dynamicStyles = {
        info: {
            width: isSmallScreen ? 'calc(100% - 250px)' : 'calc(100% - 175px)',
            paddingLeft: isSmallScreen ? 25 : 10,
        },
        nextUp: {
            marginTop: 28,
            height: window.innerHeight > 500 ? 'calc(' + window.innerHeight + 'px - ' + (isSmallScreen ? '338' : '268') + 'px)' : '',
            overflow: 'auto',
            scrollBehavior: 'smooth',
        }
    }

    return (
        <Grid component='main' style={playerStyles.main} container>
            <Button style={playerStyles.signOut} color='secondary' onClick={() => setAuthtoken(null)} variant='contained'>
                <Logout fontSize={isSmallScreen ? 'medium' : 'small'} />
            </Button>

            <audio src={songs[currentSongIndex].src} ref={audioEl} preload='metadata' />

            <Grid component='div' container>
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
                <Playlist songs={songs} currentSongIndex={currentSongIndex} setCurrentSongIndex={setCurrentSongIndex} />
            </Grid>
        </Grid>
    )
}

Player.propTypes = {
    setAuthtoken: PropTypes.func.isRequired
}