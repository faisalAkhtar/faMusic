import useAuthtoken from './utils/useAuthtoken'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import Login from './components/Login'
import Player from './components/Player'

export default function App() {
	const { authtoken, setAuthtoken } = useAuthtoken()
	const theme = createTheme({
		palette: {
			mode: 'dark',
			primary: {
				main: '#FFD369',
				dark: '#ffca4a',
				light: '#ffdd8c',
			},
			secondary: {
				main: '#EEEEEE',
				dark: '#dddddd',
				light: '#f7f7f7',
			},
			background: {
				default: '#222831'
			}
		},
		typography: {
			fontFamily: [
				'Quicksand'
			].join(','),
		},
	})

	if (!authtoken)
		return (
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Login theme={theme} setAuthtoken={setAuthtoken} />
			</ThemeProvider>
		)

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Player theme={theme} setAuthtoken={setAuthtoken} />
		</ThemeProvider>
	)
}
