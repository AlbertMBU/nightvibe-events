import React from 'react';
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  List,
  ListItem,
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import Header from '../components/Header';
import FlechasNav from '../components/FlechasNav';

const InvitacionesPage = () => {
  return (
    <>
      <Header />

      <Box sx={{ py: 16, px: { xs: 2, md: 4 }, background: 'linear-gradient(135deg, #000 0%, #1a0033 100%)' }}>
        
        {/* 1. TÍTULO ARRIBA */}
        <Typography variant="h2" sx={{ mb: 4, color: '#fff', textAlign: 'center', fontWeight: 700 }}>
          Gestión de Invitaciones
        </Typography>

        {/* 2. SUBTÍTULO DEBAJO */}
        <Typography variant="h6" sx={{ color: 'rgba(255,255,255,0.8)', textAlign: 'center', mb: 8, maxWidth: 600, mx: 'auto' }}>
          Crea, edita y controla todos tus invitados o asistentes.
        </Typography>

        {/* 3. GRID CON UNA SOLA CARD CENTRADA EN PANTALLA */}
        <Grid 
          container 
          spacing={4} 
          sx={{ 
            maxWidth: 1200, 
            mx: 'auto', 
            justifyContent: 'center'  // Centra las columnas
          }}
        >
          {/* Columna izquierda vacía (simetría invisible) */}
          <Grid item xs={12} md={6} sx={{ display: 'none' }} />
          
          {/* Card CENTRADA en toda la pantalla */}
          <Grid 
            item 
            xs={12} 
            md={5}  // md=5 para centrar perfecto
            sx={{ 
              display: 'flex', 
              justifyContent: 'center'  // Centra la card
            }}
          >
            <Card sx={{ maxWidth: 450 }}>
              <CardContent sx={{ p: 4, textAlign: 'center' }}>
                <Typography variant="h5" sx={{ mb: 3, color: 'white' }}>
                  Gestión Completa de Invitaciones
                </Typography>
                <List sx={{ p: 0, m: 0 }}>
                  <ListItem sx={{ p: 0.5 }}>
                    <CheckIcon sx={{ color: '#4caf50', mr: 1, fontSize: 20 }} />
                    <Typography sx={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem' }}>
                      Define una lista de invitados o asistentes
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ p: 0.5 }}>
                    <CheckIcon sx={{ color: '#4caf50', mr: 1, fontSize: 20 }} />
                    <Typography sx={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem' }}>
                      Configura tu tipología de invitados o asistentes
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ p: 0.5 }}>
                    <CheckIcon sx={{ color: '#4caf50', mr: 1, fontSize: 20 }} />
                    <Typography sx={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem' }}>
                      Define las cantidades de cada tipo de invitado o asistente
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ p: 0.5 }}>
                    <CheckIcon sx={{ color: '#4caf50', mr: 1, fontSize: 20 }} />
                    <Typography sx={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem' }}>
                      Examina quien abre tu invitación y la descarga
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ p: 0.5 }}>
                    <CheckIcon sx={{ color: '#4caf50', mr: 1, fontSize: 20 }} />
                    <Typography sx={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem' }}>
                      Crea paquetes de invitaciones por RRPP, por tipo, con donativo...
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

export default InvitacionesPage;
