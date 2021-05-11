import { Pause } from '@mui/icons-material'
import { CircularProgress, Grid } from '@mui/material'
import { albumcoverStyles } from '../utils/style'

export default function AlbumCover({ isbuffering, isSmallScreen, isplaying, cover }) {
    var dynamicStyles = {
        backgroundImage: "url(" + cover + ")",
        height: isSmallScreen ? 250 : 175,
        width: isSmallScreen ? 250 : 175,
        opacity: isplaying ? 1 : 0.5,
    }

    return (
        <Grid component='div' style={albumcoverStyles.cover} container>
            <Grid style={{ ...dynamicStyles, ...albumcoverStyles.img }} item />

            {isbuffering ? (
                <Grid style={albumcoverStyles.loader} item>
                    <CircularProgress color='secondary' />
                </Grid>
            ) : null}

            {!isplaying ? (
                <Grid style={albumcoverStyles.loader} item>
                    <Pause color='secondary' />
                </Grid>
            ) : null}
        </Grid>
    )
}
