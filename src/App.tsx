import { Dashboard } from './layouts/dashboard/Dashboard'
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from './theme';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {

  const theme = createTheme();

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Dashboard>
        </Dashboard>
      </ThemeProvider>
    </Router>
  )
}

export default App
