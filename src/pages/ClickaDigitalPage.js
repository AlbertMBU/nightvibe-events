import React from 'react';
import { Box, Grid, Typography, Card, CardContent } from '@mui/material';
import Header from '../components/Header';
import FlechasNav from '../components/FlechasNav';

const ClickaDigitalPage = () => {
  return (
    <>
      <Header />
      <Box sx={{ py: 16, px: { xs: 2, md: 4 }, background: 'linear-gradient(135deg, #000 0%, #1a0033 100%)' }}>
        <Typography variant="h2" sx={{ mb: 4, color: '#fff', textAlign: 'center', fontWeight: 700 }}>
          Clicka Digital
        </Typography>
        <Typography variant="h6" sx={{ color: 'rgba(255,255,255,0.8)', textAlign: 'center', mb: 8, maxWidth: 600, mx: 'auto' }}>
          Centraliza campañas digitales, enlaces y landings en un solo lugar.
        </Typography>
        <Grid container spacing={4} sx={{ maxWidth: 1200, mx: 'auto' }}>
          <Grid item xs={12} md={6}>
            <Card sx={{ height: 200 }}>
              <CardContent sx={{ p: 4, textAlign: 'center' }}>
                <Typography variant="h5" sx={{ mb: 2, color: '#fff' }}>
                  Lista Campañas
                </Typography>
                <Typography sx={{ color: 'rgba(255,255,255,0.8)' }}>
                  Gestiona campañas activas y pasadas.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card sx={{ height: 200 }}>
              <CardContent sx={{ p: 4, textAlign: 'center' }}>
                <Typography variant="h5" sx={{ mb: 2, color: '#fff' }}>
                  Nueva Campaña
                </Typography>
                <Typography sx={{ color: 'rgba(255,255,255,0.8)' }}>
                  Crea nueva campaña digital.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <FlechasNav />
      </Box>
    </>
  );
};

export default ClickaDigitalPage;
