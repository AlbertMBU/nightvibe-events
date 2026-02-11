import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Typography, Button } from '@mui/material';
import Header from './components/Header';
import Hero from './components/Hero';
import Carousel from './components/Carousel';
import Modules from './components/Modules';
import Sectors from './components/Sectors';
import Footer from './components/Footer';

const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat, sans-serif',
  },
  palette: {
    mode: 'dark',
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        {/* Header fijo */}
        <Header />
        
        {/* HOME: Hero + Carousel + CONTACTO */}
        <Box sx={{ flex: 1, pt: { xs: '70px', sm: '80px', md: '90px' } }}>
          <Hero />
          <Carousel />
          
          {/* SECCIÓN CONTACTO COMENTADA INICIO
          <Box 
            id="contacto" 
            sx={{ 
              py: 8, 
              textAlign: 'center', 
              background: 'linear-gradient(135deg, rgba(139,92,246,0.1) 0%, rgba(236,72,153,0.1) 100%)',
              mt: 4 
            }}
          >
            <Typography variant="h4" sx={{ mb: 3, fontWeight: 700 }}>
              📞 Contáctanos
            </Typography>
            <Box sx={{ maxWidth: 500, mx: 'auto' }}>
              <Typography variant="h6" sx={{ mb: 2, color: '#EC4899' }}>
                ¡Haz que tu evento sea ÉPICO!
              </Typography>
              <Typography variant="body1" sx={{ mb: 1 }}>
                📱 Tel: <a href="tel:+34123456789" style={{ color: '#8B5CF6', textDecoration: 'none' }}>+34 123 456 789</a>
              </Typography>
              <Typography variant="body1" sx={{ mb: 3 }}>
                ✉️ Email: <a href="mailto:info@fest2.fun" style={{ color: '#8B5CF6', textDecoration: 'none' }}>info@fest2.fun</a>
              </Typography>
              <Button 
                variant="contained" 
                size="large" 
                href="https://wa.me/34123456789"
                sx={{ 
                  background: 'linear-gradient(45deg, #8B5CF6 0%, #EC4899 100%)',
                  px: 4,
                  py: 1.5,
                  fontWeight: 700,
                  boxShadow: '0 4px 20px rgba(139,92,246,0.4)'
                }}
              >
                💬 WhatsApp Ahora
              </Button>
            </Box>
          </Box>
          FIN DE SECCIÓN COMENTADA */}
        </Box>
        
        {/* MÓDULOS */}
        <Modules />
        
        {/* SECTORES */}
        <Sectors />
        
        {/* Footer */}
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default App;