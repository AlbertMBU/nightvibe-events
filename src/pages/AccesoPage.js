import React from 'react';
import { Box, Grid, Typography, Card, CardContent } from '@mui/material';
import Header from '../components/Header'; // QUITA: import Footer from '../components/Footer';
import FlechasNav from '../components/FlechasNav';

const AccesoPage = () => {
  return (
    <>
      <Header />
      <Box sx={{ py: 16, px: { xs: 2, md: 4 }, background: 'linear-gradient(135deg, #000 0%, #1a0033 100%)' }}>
        <Typography variant="h2" sx={{ mb: 4, color: '#fff', textAlign: 'center', fontWeight: 700 }}>
          Control de Acceso
        </Typography>
        <Typography variant="h6" sx={{ color: 'rgba(255,255,255,0.8)', textAlign: 'center', mb: 8, maxWidth: 600, mx: 'auto' }}>
          Escanea QR en la puerta.
        </Typography>
        <Grid container spacing={4} sx={{ maxWidth: 1200, mx: 'auto' }}>
          <Grid item xs={12} md={6}>
            <Card sx={{ height: 200 }}>
              <CardContent sx={{ p: 4, textAlign: 'center' }}>
                <Typography variant="h5" sx={{ mb: 2, color: '#fff' }}>Scanner QR</Typography>
                <Typography sx={{ color: 'rgba(255,255,255,0.8)' }}>Entradas rápidas</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card sx={{ height: 200 }}>
              <CardContent sx={{ p: 4, textAlign: 'center' }}>
                <Typography variant="h5" sx={{ mb: 2, color: '#fff' }}>Logs</Typography>
                <Typography sx={{ color: 'rgba(255,255,255,0.8)' }}>Historial entradas</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <FlechasNav /> {/* AGREGA FLECHAS DE NAVEGACIÓN */}
      </Box>
      {/* QUITA <Footer /> */}
    </>
  );
};

export default AccesoPage;
