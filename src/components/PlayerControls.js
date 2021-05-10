import { Grid, IconButton } from '@mui/material'
import { PlayArrow as Play, Pause, SkipPrevious, SkipNext } from '@mui/icons-material'
import PropTypes from 'prop-types'
import { playerControlsStyles } from '../utils/style'

export default function PlayerControls({ isSmallScreen, isplaying, setIsplaying, skipSong }) {
    const dynamicStyles = {
        controls: {
            height: isSmallScreen ? 80 : 65,
        },
        playBtn: {
            marginLeft: isSmallScreen ? 30 : 10,
            marginRight: isSmallScreen ? 30 : 10,
        }
    }

    return (
        <Grid style={{ ...dynamicStyles.controls, ...playerControlsStyles.controls }} component='div' container >
            <IconButton style={playerControlsStyles.otherBtns} aria-label='Previous' onClick={() => skipSong(false)}>
                <SkipPrevious fontSize={isSmallScreen ? 'large' : 'medium'} />
            </IconButton>
            <IconButton style={{ ...dynamicStyles.playBtn, ...playerControlsStyles.playBtn }} aria-label={isplaying ? 'Pause' : 'Play'} onClick={() => setIsplaying(!isplaying)}>
                {isplaying ? <Pause fontSize={isSmallScreen ? 'large' : 'medium'} /> : <Play fontSize={isSmallScreen ? 'large' : 'medium'} />}
            </IconButton>
            <IconButton style={playerControlsStyles.otherBtns} aria-label='Next' onClick={() => skipSong()}>
                <SkipNext fontSize={isSmallScreen ? 'large' : 'medium'} />
            </IconButton>
        </Grid>
    )
}

PlayerControls.propTypes = {
    isplaying: PropTypes.bool.isRequired,
    setIsplaying: PropTypes.func.isRequired,
    skipSong: PropTypes.func.isRequired,
}