import { useEffect, useRef, useState } from 'react'
import PlayerControls from './PlayerControls'
import PlayerDetails from './PlayerDetails'
import songslist from '../../songsList.json'
import { Button, CssBaseline, Grid, Typography } from '@mui/material'

export default function Player({ setAuthtoken }) {
    const audioEl = useRef(null)
    const [songs] = useState(songslist)
    const [currentSongIndex, setCurrentSongIndex] = useState(0)
    const [nextSongIndex, setnextSongIndex] = useState(currentSongIndex + 1)
    const [isplaying, setIsplaying] = useState(false)

    useEffect(() => {
        setnextSongIndex((currentSongIndex + 1 > songs.length - 1) ? 0 : currentSongIndex + 1)
    }, [currentSongIndex, songs.length])

    useEffect(() => {
        if (isplaying)
            audioEl.current.play()
        else audioEl.current.pause()
    })

    const skipSong = (forwards = true) => {
        if (forwards)
            setCurrentSongIndex(() => (currentSongIndex + 1 > songs.length - 1) ? 0 : currentSongIndex + 1)
        else setCurrentSongIndex(() => (currentSongIndex - 1 < 0) ? songs.length - 1 : currentSongIndex - 1)
    }

    const style = {
        nowPlaying: {
            fontSize: 16,
            textAlign: 'center',
            marginTop: 8,
            marginBottom: 8,
            textTransform: 'uppercase',
        },
        nextUp: {
            fontSize: 16,
            textAlign: 'center',
            marginTop: 8,
            marginBottom: 8,
        },
        signOut: {
            position: 'absolute',
            right: 8,
            top: 8,
        }
    }

    return (
        <Grid container component='main' sx={{ height: '100vh' }}>
            <CssBaseline />
            <Grid item xs={false} sm={1} md={2} lg={3} />
            <Grid item xs={12} sm={10} md={8} lg={6} backgroundColor='secondary' sx={{ position: 'relative', paddingTop: 5 }}>
                <Button style={style.signOut} size='small' onClick={() => setAuthtoken(null)} variant='contained'>Sign out</Button>
                <audio src={songs[currentSongIndex].src} ref={audioEl}></audio>
                <Typography style={style.nowPlaying} component='h4'>Now Playing</Typography>
                <PlayerDetails
                    {...songs[currentSongIndex]}
                />
                <PlayerControls
                    isplaying={isplaying}
                    setIsplaying={setIsplaying}
                    skipSong={skipSong}
                />
                <Typography style={style.nextUp}>
                    <strong>Next up:</strong> {songs[nextSongIndex].title} <em>by</em> {songs[nextSongIndex].artist}
                </Typography>
            </Grid>
            <Grid item xs={false} sm={1} md={2} lg={3} />
        </Grid>
    )
}
