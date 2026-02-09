import React from 'react';
import { Box, Grid, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const sectors = [
  {
    title: 'Discotecas',
    description: 'Gestión completa para clubs nocturnos con alta rotación diaria.',
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Festivales',
    description: 'Escalabilidad desde un pequeño evento hasta festivales masivos.',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Eventos Privados',
    description: 'Soluciones premium para fiestas exclusivas y corporativas.',
    image: 'https://images.unsplash.com/photo-1571896349840-e9e7359a42ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
];

const Sectors = () => {
  return (
    <Box id="sectores" sx={{ py: 16, px: { xs: 2, md: 4 }, background: 'linear-gradient(180deg, rgba(0,0,0,0.8) 0%, transparent 100%)' }}>
      <Box sx={{ maxWidth: 1200, mx: 'auto', textAlign: 'center', mb: 12 }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h2" sx={{ mb: 4, color: '#fff' }}>
            Nuestros Sectores
          </Typography>
          <Typography variant="h6" sx={{ color: 'rgba(255,255,255,0.8)', maxWidth: 600, mx: 'auto' }}>
            Adaptamos nuestra tecnología a cada tipo de evento para maximizar su éxito
          </Typography>
        </motion.div>
      </Box>

      <Box sx={{ maxWidth: 1200, mx: 'auto' }}>
        <Grid container spacing={6}>
          {sectors.map((sector, index) => (
            <Grid item xs={12} md={4} key={sector.title}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card sx={{ height: '100%', overflow: 'hidden' }}>
                  <CardMedia
                    component="img"
                    height="250"
                    image={sector.image}
                    alt={sector.title}
                    sx={{
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.7) 100%)',
                      },
                    }}
                  />
                  <CardContent sx={{ p: 4, pt: 0 }}>
                    <Typography variant="h5" sx={{ mb: 2, fontWeight: 700, color: '#fff' }}>
                      {sector.title}
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.9)' }}>
                      {sector.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Sectors;
