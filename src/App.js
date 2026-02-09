import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';
import Header from './components/Header';
import Hero from './components/Hero';
import Modules from './components/Modules';
import Sectors from './components/Sectors';
import Footer from './components/Footer';

// ✅ THEME DEFINIDO PRIMERO (antes de usarlo)
const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat, sans-serif',
    h1: {
      fontWeight: 900,
      fontSize: '4rem',
      lineHeight: 1.1,
      responsive: {
        900: {
          fontSize: '2.5rem',
        },
      },
    },
    h2: {
      fontWeight: 700,
      fontSize: '2.5rem',
      responsive: {
        900: {
          fontSize: '2rem',
        },
      },
    },
  },
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box 
        sx={{ 
          pt: { xs: '70px', sm: '80px', md: '90px' },  // ✅ Padding responsive
          pb: { xs: '20px', md: '40px' },
          overflowX: 'hidden',
          minHeight: '100vh'
        }}
      >
        <Header />
        <Hero />
        <Modules />
        <Sectors />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
