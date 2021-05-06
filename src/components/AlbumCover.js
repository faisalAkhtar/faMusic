import { Grid } from '@mui/material'
import { albumcoverStyles } from '../utils/style'

export default function AlbumCover({ isSmallScreen, isplaying, cover }) {
    var dynamicStyles = {
        backgroundImage: "url(" + cover + "), url(cruella.png)",
        height: isSmallScreen ? 250 : 180,
        width: isSmallScreen ? 250 : 180,
        opacity: isplaying ? 1 : 0.5,
    }

    return (
        <Grid component='div' direction='column' alignItems='center' container>
            <Grid style={{ ...dynamicStyles, ...albumcoverStyles.img }} item />
        </Grid>
    )
}
