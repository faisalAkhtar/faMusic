import { Grid, Link, Typography } from '@mui/material'
import { songdetailsStyles } from '../utils/style'

export default function SongDetails({ isSmallScreen, title, artists }) {
    const dynamicStyles = {
        details: {
            height: isSmallScreen ? 160 : 100
        },
        title: {
            fontSize: isSmallScreen ? 30 : 25,
            marginTop: isSmallScreen ? 30 : 15,
            maxHeight: isSmallScreen ? 60 : 50,
        },
        artist: {
            fontSize: isSmallScreen ? 20 : 15,
            marginTop: 10,
            maxHeight: isSmallScreen ? 60 : 30,
        },
    }

    return (
        <Grid style={{ ...dynamicStyles.details, ...songdetailsStyles.details }} component='div' container>
            <Typography style={{ ...dynamicStyles.title, ...songdetailsStyles.title }} component='div' variant='h3'>{title}</Typography>
            <Typography style={{ ...dynamicStyles.artist, ...songdetailsStyles.artist }} component='h4' variant='h4'>
                {artists.map((artist, ind) => <Link key={ind} color='inherit' href='#' underline='hover'>{artist} </Link>)}
            </Typography>
        </Grid>
    )
}
