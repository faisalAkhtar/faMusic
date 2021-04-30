import { useEffect, useRef, useState } from 'react'
import songslist from '../../songsList.json'
import PlayerControls from './PlayerControls'
import PlayerDetails from './PlayerDetails'

export default function Player({ setAuthtoken }) {
    const audioEl = useRef(null);
    const [songs] = useState(songslist);
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [nextSongIndex, setnextSongIndex] = useState(currentSongIndex + 1);
    const [isplaying, setIsplaying] = useState(false);

    useEffect(() => {
        setnextSongIndex((currentSongIndex + 1 > songs.length - 1) ? 0 : currentSongIndex + 1);
    }, [currentSongIndex, songs.length])

    useEffect(() => {
        if (isplaying)
            audioEl.current.play();
        else audioEl.current.pause();
    })

    const skipSong = (forwards = true) => {
        if (forwards) {
            setCurrentSongIndex(() => (currentSongIndex + 1 > songs.length - 1) ? 0 : currentSongIndex + 1);
        } else {
            setCurrentSongIndex(() => (currentSongIndex - 1 < 0) ? songs.length - 1 : currentSongIndex - 1);
        }
    }

    return (
        <div className='player'>
            <button onClick={() => setAuthtoken(null)}>Sign out</button>
            <audio src={songs[currentSongIndex].src} ref={audioEl}></audio>
            <h4>Now Playing</h4>
            <PlayerDetails
                {...songs[currentSongIndex]}
            />
            <PlayerControls
                isplaying={isplaying}
                setIsplaying={setIsplaying}
                skipSong={skipSong}
            />
            <p><strong>Next up:</strong> {songs[nextSongIndex].title} by {songs[nextSongIndex].artist}</p>
        </div>
    )
}
