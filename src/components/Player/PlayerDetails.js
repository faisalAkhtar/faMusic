import { Grid, Typography } from '@mui/material'

export default function PlayerDetails({ cover, title, artist }) {
    var style = {
        title: {
            color: '#eeeeee',
            fontSize: 28,
            marginTop: 14,
            marginBottom: 14,
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8), -2px -2px 4px rgba(255, 255, 255, 0.4)',
        },
        artist: {
            color: '#aaaaaa',
            fontSize: 20,
            marginTop: 14,
            marginBottom: 14,
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8), -2px -2px 4px rgba(255, 255, 255, 0.4)',
        },
        img: {
            height: 300,
            width: 300,
            borderRadius: '50%',
            backgroundImage: "url(" + cover + ")",
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
        }
    }

    return (
        <Grid component='div' direction='column' alignItems='center' container>
            <Grid style={style.img} item />
            <Typography style={style.title} component='h3' variant='h3'>{title}</Typography>
            <Typography style={style.artist} component='h4' variant='h4'>{artist}</Typography>
        </Grid>
    )
}
