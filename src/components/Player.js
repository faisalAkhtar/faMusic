import { useEffect, useRef, useState } from 'react'
import PlayerControls from './PlayerControls'
import PlayerDetails from './PlayerDetails'

export default function Player({ currentSongIndex, nextSongIndex, setCurrentSongIndex, songs }) {
    const audioEl = useRef(null);
    const [isplaying, setIsplaying] = useState(false);

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
