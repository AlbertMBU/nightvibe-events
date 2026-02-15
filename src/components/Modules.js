import React from 'react';
import { Box, Grid, Card, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import {
  Computer, // ← Icono para Clicka Digital
  ConfirmationNumber,
  QrCodeScanner,
  BarChart,
  AccountBalance
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const Modules = () => {
  const modules = [
    {
      icon: Computer,
      title: 'Clicka Digital',
      description: 'Centraliza campañas digitales, enlaces y landings para tus eventos.',
      route: 'clicka-digital'
    },
    {
      icon: ConfirmationNumber,
      title: 'Gestión de Invitaciones',
      description: 'Control total de Invitados, trabajadores, asistentes...',
      route: 'invitaciones'
    },
    {
      icon: QrCodeScanner,
      title: 'Control de Acceso',
      description: 'Escaneo rápido en puerta con validación en tiempo real.',
      route: 'acceso'
    },
    {
      icon: BarChart,
      title: 'Analíticas de Asistentes',
      description: 'Datos en tiempo real sobre afluencia, demografía y comportamiento.',
      route: 'analiticas'
    },
    {
      icon: AccountBalance,
      title: 'Aforos por Zonas',
      description: 'Herramientas para control de aforo por zonas.',
      route: 'aforos'
    }
  ];

  return (
    <Box id="modulos" sx={{ py: 16, px: { xs: 2, md: 4 } }}>
      <Typography
        variant="h3"
        sx={{
          textAlign: 'center',
          fontWeight: 800,
          color: '#F9FAFB',
          mb: 4
        }}
      >
        Nuestros Módulos
      </Typography>
      <Typography
        variant="h6"
        sx={{
          textAlign: 'center',
          color: 'rgba(255,255,255,0.8)',
          mb: 8,
          maxWidth: 800,
          mx: 'auto'
        }}
      >
        Plataforma todo-en-uno diseñada específicamente por y para la industria del entretenimiento
      </Typography>

      <Grid container spacing={4}>
        {modules.map((module, index) => {
          const Icon = module.icon;
          return (
            <Grid item xs={12} sm={6} md={4} lg={2.4} key={module.title}>
              <Link to={`/modulos/${module.route}`} style={{ textDecoration: 'none' }}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 18 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      background: 'rgba(15, 23, 42, 0.9)',
                      border: '1px solid rgba(139, 92, 246, 0.3)',
                      borderRadius: 3,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        background: 'rgba(139, 92, 246, 0.15)',
                        borderColor: 'rgba(139, 92, 246, 0.6)',
                        boxShadow: '0 20px 40px rgba(139, 92, 246, 0.2)'
                      }
                    }}
                  >
                    <CardContent sx={{ p: 4, textAlign: 'center' }}>
                      <Box
                        sx={{
                          width: 64,
                          height: 64,
                          borderRadius: 2,
                          background: 'linear-gradient(135deg, #8B5CF6, #EC4899)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mx: 'auto',
                          mb: 3,
                          boxShadow: '0 10px 30px rgba(139, 92, 246, 0.4)'
                        }}
                      >
                        <Icon sx={{ fontSize: 32, color: 'white' }} />
                      </Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 700,
                          color: '#F9FAFB',
                          mb: 2
                        }}
                      >
                        {module.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: 'rgba(255,255,255,0.8)' }}
                      >
                        {module.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Link>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Modules;
