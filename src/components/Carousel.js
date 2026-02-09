import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const clients = [
  { name: 'Ibiza Club', logo: 'https://via.placeholder.com/200x60/8B5CF6/fff?text=IBIZA+CLUB' },
  { name: 'Madrid Beats', logo: 'https://via.placeholder.com/200x60/EC4899/fff?text=MADRID+BEATS' },
  { name: 'Barcelona Rave', logo: 'https://via.placeholder.com/200x60/F59E0B/000?text=BCN+RAVE' },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % clients.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        py: 8,
        background: 'linear-gradient(90deg, rgba(139,92,246,0.1) 0%, rgba(236,72,153,0.1) 100%)',
      }}
    >
      <Box sx={{ maxWidth: 1200, mx: 'auto', px: 2 }}>
        <Typography
          variant="h6"
          sx={{
            textAlign: 'center',
            mb: 4,
            color: '#fff',
            fontWeight: 600,
            fontSize: '1.2rem',
          }}
        >
          Casos de éxito: +500 eventos gestionados
        </Typography>
        
        <Box sx={{ overflow: 'hidden', position: 'relative' }}>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            style={{
              display: 'flex',
              gap: '40px',
              justifyContent: 'center',
              alignItems: 'center',
              minHeight: '100px',
            }}
          >
            {clients.map((client) => (
              <Box
                key={client.name}
                component="img"
                src={client.logo}
                alt={client.name}
                sx={{
                  height: { xs: 40, md: 60 },
                  width: 'auto',
                  filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.3))',
                  borderRadius: '12px',
                }}
              />
            ))}
          </motion.div>
        </Box>
      </Box>
    </Box>
  );
};

export default Carousel;
