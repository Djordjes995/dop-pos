import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from './theme';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './router'

function App() {

  const theme = createTheme();

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <AppRouter />
      </ThemeProvider>
    </Router >
  )
}

export default App
