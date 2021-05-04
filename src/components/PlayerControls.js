import { Grid, IconButton } from '@mui/material'
import { PlayArrow as Play, Pause, SkipPrevious, SkipNext } from '@mui/icons-material'
import { playerControlsStyles } from '../utils/style'

export default function PlayerControls({ isplaying, setIsplaying, skipSong }) {
    return (
        <Grid container component='div' justifyContent='center' alignItems='center' sx={{ marginTop: 2, marginBottom: 2 }}>
            <IconButton style={playerControlsStyles.otherBtns} aria-label='Previous' onClick={() => skipSong(false)}>
                <SkipPrevious fontSize='large' />
            </IconButton>
            <IconButton style={playerControlsStyles.playBtn} aria-label={isplaying ? 'Pause' : 'Play'} onClick={() => setIsplaying(!isplaying)}>
                {isplaying ? <Pause fontSize='large' /> : <Play fontSize='large' />}
            </IconButton>
            <IconButton style={playerControlsStyles.otherBtns} aria-label='Next' onClick={() => skipSong()}>
                <SkipNext fontSize='large' />
            </IconButton>
        </Grid>
    )
}
