import { useEffect, useRef, useState } from 'react'
import { Button, Grid, Typography } from '@mui/material'
import { Logout } from '@mui/icons-material/'
import { playerStyles } from '../utils/style'
import PlayerControls from './PlayerControls'
import PlayerDetails from './PlayerDetails'
import songslist from '../songsList.json'

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
        audioEl.current.onplaying = null
        audioEl.current.onplaying = e => {
            console.log('Playing')
            setIsplaying(true)
        }

        audioEl.current.onpause = null
        audioEl.current.onpause = e => {
            console.log('Paused')
            setIsplaying(false)
        }

        audioEl.current.onended = null
        audioEl.current.onended = e => {
            console.log('Ended')
            skipSong()
            setTimeout(() => {
                audioEl.current.play()
            }, 100)
        }

        if (isplaying)
            audioEl.current.play()
        else audioEl.current.pause()
    })

    const skipSong = (forwards = true) => {
        if (forwards)
            setCurrentSongIndex(() => (currentSongIndex + 1 > songs.length - 1) ? 0 : currentSongIndex + 1)
        else setCurrentSongIndex(() => (currentSongIndex - 1 < 0) ? songs.length - 1 : currentSongIndex - 1)
    }

    return (
        <Grid container component='main'>
            <Grid item xs={false} sm={1} md={2} lg={3} />
            <Grid item xs={12} sm={10} md={8} lg={6} sx={{ position: 'relative', paddingTop: 5 }}>
                <Button style={playerStyles.signOut} size='small' color='secondary' onClick={() => setAuthtoken(null)} variant='contained'>
                    <Logout />
                </Button>
                <audio src={songs[currentSongIndex].src} ref={audioEl}></audio>
                <Typography style={playerStyles.nowPlaying} component='h4'>Now Playing</Typography>
                <PlayerDetails
                    {...songs[currentSongIndex]}
                />
                <PlayerControls
                    isplaying={isplaying}
                    setIsplaying={setIsplaying}
                    skipSong={skipSong}
                />
                <Typography style={playerStyles.nextUp}>
                    <strong>Next up:</strong> {songs[nextSongIndex].title} <em>by</em> {songs[nextSongIndex].artist}
                </Typography>
            </Grid>
            <Grid item xs={false} sm={1} md={2} lg={3} />
        </Grid>
    )
}
