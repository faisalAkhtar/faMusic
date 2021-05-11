import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import Login from './components/Login'
import Player from './components/Player'
import useAuthtoken from './utils/useAuthtoken'

export default function App() {
	const { authtoken, setAuthtoken } = useAuthtoken()
	const theme = createTheme({
		components: {
			MuiCssBaseline: {
				styleOverrides: `
				::-webkit-scrollbar {
					background: #393E46;
					width: 6px;
					height: 6px;
				}
				::-webkit-scrollbar-thumb {
					background: #EEEEEE;
					border-radius: 6px;
				}
				.MuiPaper-root {
					background-color: #222831 !important;
				}`,
			},
		},
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
