import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from './theme';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './router'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { registerLicense } from "@syncfusion/ej2-base";
import { syncfusion_license } from '../license'

function App() {

  registerLicense(syncfusion_license);

  const theme = createTheme();
  const queryClient = new QueryClient(
    {
      defaultOptions: {
        queries: {
          retry: false,
        },
      },
    }
  )

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
