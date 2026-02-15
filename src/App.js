import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';

// Components Home
import Header from './components/Header';
import Hero from './components/Hero';
import Carousel from './components/Carousel';
import Modules from './components/Modules';
import Sectors from './components/Sectors';
import Footer from './components/Footer';

// Subpáginas módulos
import ClickaDigitalPage from './pages/ClickaDigitalPage';  // ← NUEVO!
import InvitacionesPage from './pages/InvitacionesPage';
import AccesoPage from './pages/AccesoPage';
import AnaliticasPage from './pages/AnaliticasPage';
import AforosPage from './pages/AforosPage';

const theme = createTheme({
  typography: { fontFamily: 'Montserrat, sans-serif' },
  palette: { mode: 'dark' },
});

const Home = () => (
  <>
    <Header />
    <Hero />
    <Carousel />
    <Modules />
    <Sectors />
    <Footer />
  </>
);

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Router>
      <Box sx={{ overflowX: 'hidden' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/modulos/clicka-digital" element={<ClickaDigitalPage />} />  {/* ← NUEVO */}
          <Route path="/modulos/invitaciones" element={<InvitacionesPage />} />
          <Route path="/modulos/acceso" element={<AccesoPage />} />
          <Route path="/modulos/analiticas" element={<AnaliticasPage />} />
          <Route path="/modulos/aforos" element={<AforosPage />} />
        </Routes>
      </Box>
    </Router>
  </ThemeProvider>
);

export default App;
