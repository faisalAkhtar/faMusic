import { Grid, Typography } from '@mui/material'
import { playerDetailsStyles } from '../utils/style'

export default function PlayerDetails({ cover, title, artist }) {
    var bgImg = {
        backgroundImage: "url(" + cover + ")",
    }

    return (
        <Grid component='div' direction='column' alignItems='center' container>
            <Grid style={{ ...bgImg, ...playerDetailsStyles.img }} item />
            <Typography style={playerDetailsStyles.title} component='h3' variant='h3'>{title}</Typography>
            <Typography style={playerDetailsStyles.artist} component='h4' variant='h4'>{artist}</Typography>
        </Grid>
    )
}
