import { useEffect, useState } from 'react';
import songslist from './songsList.json'
import Player from './components/Player';

export default function App() {
	const [songs] = useState(songslist);
	const [currentSongIndex, setCurrentSongIndex] = useState(0);
	const [nextSongIndex, setnextSongIndex] = useState(currentSongIndex + 1);

	useEffect(() => {
		setnextSongIndex((currentSongIndex + 1 > songs.length - 1) ? 0 : currentSongIndex + 1);
 	}, [currentSongIndex, songs.length])

	return (
		<>
			<Player
				currentSongIndex={currentSongIndex}
				nextSongIndex={nextSongIndex}
				setCurrentSongIndex={setCurrentSongIndex}
				songs={songs}
			/>
		</>
	);
}
