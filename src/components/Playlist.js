import { PlayArrow } from '@mui/icons-material'
import { Link, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material'
import { playlistStyles } from '../utils/style'

export default function Playlist({ songs, setIsplaying, currentSongIndex, setCurrentSongIndex }) {
    return (
        <TableContainer>
            <Table aria-label='nextUp'>
                <TableBody>
                    {songs.map((song, ind) => {
                        return (
                            <TableRow
                                key={ind}
                                style={ind === currentSongIndex ? playlistStyles.selectedRow : playlistStyles.row}
                                onClick={() => {
                                    setCurrentSongIndex(ind)
                                    setIsplaying(true)
                                }}>
                                <TableCell style={playlistStyles.icon} scope='row'>
                                    {ind === currentSongIndex ? (<PlayArrow />) : (ind + 1)}
                                </TableCell>
                                <TableCell style={playlistStyles.title} scope='row'>{song.title}</TableCell>
                                <TableCell style={playlistStyles.artists} scope='row'>
                                    {song.artists.map((artist, ind) => <Link key={ind} color='inherit' href='#' underline='hover'>{artist} </Link>)}
                                </TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer >
    )
}
