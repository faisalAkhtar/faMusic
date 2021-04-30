import Player from './components/Player/Player'
import Login from './components/Login/Login'
import useAuthtoken from './utils/useAuthtoken'

export default function App() {
	const { authtoken, setAuthtoken } = useAuthtoken()

	if (!authtoken)
		return <Login setAuthtoken={setAuthtoken} />

	return <Player setAuthtoken={setAuthtoken} />
}
