import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';

import Header from './components/Header';
import Hero from './components/Hero';
import Carousel from './components/Carousel';
import Modules from './components/Modules';
import Sectors from './components/Sectors';
import Footer from './components/Footer';

import InvitacionesPage from './pages/InvitacionesPage';
import AccesoPage from './pages/AccesoPage';
import AnaliticasPage from './pages/AnaliticasPage';
import AforosPage from './pages/AforosPage';

const theme = createTheme({
  typography: { fontFamily: 'Montserrat, sans-serif' },
  palette: { mode: 'dark' },
});

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Router>
      <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Header />
        <Box sx={{ flex: 1, pt: { xs: '70px', sm: '80px', md: '90px' } }}>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Carousel />
                <Modules />
                <Sectors />
              </>
            } />
            <Route path="/modulos/invitaciones" element={<InvitacionesPage />} />
            <Route path="/modulos/acceso" element={<AccesoPage />} />
            <Route path="/modulos/analiticas" element={<AnaliticasPage />} />
            <Route path="/modulos/aforos" element={<AforosPage />} />
          </Routes>
        </Box>
        <Footer />
      </Box>
    </Router>
  </ThemeProvider>
);

export default App;
