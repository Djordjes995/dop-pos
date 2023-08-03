import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from './theme';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './router'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

function App() {

  const theme = createTheme();
  const queryClient = new QueryClient()

  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <AppRouter />
        </ThemeProvider>
      </QueryClientProvider>
    </Router >
  )
}

export default App
