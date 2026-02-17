import React from 'react';
import { Box, Grid, Typography, Card, CardContent, List, ListItem } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
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
          El clicka de toda la vida pero en formato digital. Sin filas, sin esperas, sin complicaciones.
        </Typography>
        <Grid container spacing={4} sx={{ maxWidth: 1200, mx: 'auto' }}>
          <Grid item xs={12} md={6}>
            <Card sx={{ height: 200 }}>
              <CardContent sx={{ p: 4, textAlign: 'center' }}>
                <Typography variant="h5" sx={{ mb: 3, color: 'white' }}>
                  Clicka digital
                </Typography>
                <List sx={{ p: 0, m: 0 }}>
                  <ListItem sx={{ p: 0.5, justifyContent: 'center' }}>
                    <CheckIcon sx={{ color: '#4caf50', mr: 1, fontSize: 20 }} />
                    <Typography sx={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem' }}>
                      Define tus accesos y salidas
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ p: 0.5, justifyContent: 'center' }}>
                    <CheckIcon sx={{ color: '#4caf50', mr: 1, fontSize: 20 }} />
                    <Typography sx={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem' }}>
                      Descarga la app en cualquier dispositivo android o iOS
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ p: 0.5, justifyContent: 'center' }}>
                    <CheckIcon sx={{ color: '#4caf50', mr: 1, fontSize: 20 }} />
                    <Typography sx={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem' }}>
                      Monitorea en tiempo real la asistencia de tu evento
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ p: 0.5, justifyContent: 'center' }}>
                    <CheckIcon sx={{ color: '#4caf50', mr: 1, fontSize: 20 }} />
                    <Typography sx={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem' }}>
                      Adaptable a cualquier espacio o evento
                    </Typography>
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card sx={{ height: 200 }}>
              <CardContent sx={{ p: 4, textAlign: 'center' }}>
                <Typography variant="h5" sx={{ mb: 3, color: 'white' }}>
                  Dashboard con asistencia por dias, horas...
                </Typography>
                <List sx={{ p: 0, m: 0 }}>
                  <ListItem sx={{ p: 0.5, justifyContent: 'center' }}>
                    <CheckIcon sx={{ color: '#4caf50', mr: 1, fontSize: 20 }} />
                    <Typography sx={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem' }}>
                      Consulta el historial de asistencia de tus eventos anteriores
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ p: 0.5, justifyContent: 'center' }}>
                    <CheckIcon sx={{ color: '#4caf50', mr: 1, fontSize: 20 }} />
                    <Typography sx={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem' }}>
                      Descarga y consulta tu asistencia en cualquier momento
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ p: 0.5, justifyContent: 'center' }}>
                    <CheckIcon sx={{ color: '#4caf50', mr: 1, fontSize: 20 }} />
                    <Typography sx={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem' }}>
                      Análisis de flujo de personas en tu evento o local
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ p: 0.5, justifyContent: 'center' }}>
                    <CheckIcon sx={{ color: '#4caf50', mr: 1, fontSize: 20 }} />
                    <Typography sx={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem' }}>
                      Define estrategias de marketing basadas en la asistencia a tus eventos
                    </Typography>
                  </ListItem>
                </List>
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
