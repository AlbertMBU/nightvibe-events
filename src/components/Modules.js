import React from 'react';
import { Box, Grid, Card, CardContent, Typography } from '@mui/material';
import { 
  ConfirmationNumber,     // ✅ TICKET
  QrCodeScanner,         // ✅ QR
  BarChart,              // ✅ CHART
  AccountBalance         // ✅ ZONAS (reemplazo EditSquare)
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const Modules = () => {
  const modules = [
    {
      icon: ConfirmationNumber,
      title: 'Gestión de Invitaciones',
      description: 'Control total de Invitados, trabajadores, asistentes...'
    },
    {
      icon: QrCodeScanner,
      title: 'Control de Acceso',
      description: 'Escaneo rápido en puerta con validación en tiempo real.'
    },
    {
      icon: BarChart,
      title: 'Analíticas de Asistentes',
      description: 'Datos en tiempo real sobre afluencia, demografía y comportamiento.'
    },
    {
      icon: AccountBalance,
      title: 'Aforos por Zonas',
      description: 'Herramientas para control de aforo por zonas.'
    },
  ];

  return (
    <>
      <Box sx={{ py: 16, px: { xs: 2, md: 4 } }}>
        <Box sx={{ maxWidth: 1200, mx: 'auto', textAlign: 'center', mb: 12 }}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Typography variant="h2" sx={{ mb: 4, color: '#fff' }}>
              Nuestros Módulos
            </Typography>
            <Typography variant="h6" sx={{ color: 'rgba(255,255,255,0.8)', maxWidth: 600, mx: 'auto' }}>
              Plataforma todo-en-uno diseñada específicamente por y para la industria del entretenimiento
            </Typography>
          </motion.div>
        </Box>

        <Box sx={{ maxWidth: 1200, mx: 'auto' }}>
          <Grid container spacing={4} justifyContent="center">
            {modules.map((module, index) => (
              <Grid item xs={12} sm={6} md={3} key={module.title}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card sx={{ height: '100%', p: 0 }}>
                    <CardContent sx={{ p: 4, textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column' }}>
                      <Box sx={{ mb: 3, mx: 'auto', width: 60, height: 60, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(45deg, #8B5CF6, #EC4899)', borderRadius: '16px' }}>
                        <module.icon sx={{ color: '#fff', fontSize: 28 }} />
                      </Box>
                      <Typography variant="h5" sx={{ mb: 2, fontWeight: 700, color: '#fff' }}>
                        {module.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)', flexGrow: 1 }}>
                        {module.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Modules;
