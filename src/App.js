import useAuthtoken from './utils/useAuthtoken'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Player from './components/Player/Player'
import Login from './components/Login/Login'

export default function App() {
	const { authtoken, setAuthtoken } = useAuthtoken()
	const theme = createTheme({
		palette: {
			mode: 'dark'
		},
		typography: {
			fontFamily: [
				'Quicksand'
			].join(',')
		}
	})

	if (!authtoken)
		return (
			<ThemeProvider theme={theme}>
				<Login theme={theme} setAuthtoken={setAuthtoken} />
			</ThemeProvider>
		)

	return (
		<ThemeProvider theme={theme}>
			<Player theme={theme} setAuthtoken={setAuthtoken} />
		</ThemeProvider>
	)
}
