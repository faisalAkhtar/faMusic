import { Grid, IconButton } from '@mui/material'
import { PlayArrow as Play, Pause, SkipPrevious, SkipNext } from '@mui/icons-material'

export default function PlayerControls({ isplaying, setIsplaying, skipSong }) {
    const style = {
        playBtn: {
            padding: 20,
            marginLeft: 30,
            marginRight: 30,
            boxShadow: '4px 4px 10px rgba(0, 0, 0, 0.8), -4px -4px 10px rgba(255, 255, 255, 0.4), inset -4px -4px 10px rgba(0, 0, 0, 0.8), inset 4px 4px 10px rgba(255, 255, 255, 0.4)',
            backgroundColor: '#ffce00',
        },
        otherBtns: {
            color: '#888888',
        }
    }

    return (
        <Grid container component='div' justifyContent='center' alignItems='center' sx={{ marginTop: 2, marginBottom: 2 }}>
            <IconButton style={style.otherBtns} aria-label='Previous' onClick={() => skipSong(false)}>
                <SkipPrevious fontSize='large' />
            </IconButton>
            <IconButton style={style.playBtn} aria-label={isplaying ? 'Pause' : 'Play'} onClick={() => setIsplaying(!isplaying)}>
                {isplaying ? <Pause fontSize='large' /> : <Play fontSize='large' />}
            </IconButton>
            <IconButton style={style.otherBtns} aria-label='Next' onClick={() => skipSong()}>
                <SkipNext fontSize='large' />
            </IconButton>
        </Grid>
    )
}
