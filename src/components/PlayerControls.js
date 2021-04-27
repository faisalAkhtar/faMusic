import { MdPlayArrow, MdPause, MdSkipNext, MdSkipPrevious } from 'react-icons/md';

export default function PlayerControls({ isplaying, setIsplaying, skipSong }) {
    return (
        <div className='controls'>
            <button className='controls-prev' onClick={() => skipSong(false)}><MdSkipPrevious /></button>
            <button className='controls-play' onClick={() => setIsplaying(!isplaying)}>{isplaying ? <MdPause /> : <MdPlayArrow />}</button>
            <button className='controls-next' onClick={() => skipSong()}><MdSkipNext /></button>
        </div>
    )
}
