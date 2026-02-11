import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const clients = [
  { 
    name: 'Ibiza Club', 
    logo: 'https://images.unsplash.com/photo-1571896349840-f9b4a8e9f4e8?w=200&h=60&fit=crop&crop=center' 
  },
  { 
    name: 'Madrid Beats', 
    logo: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=200&h=60&fit=crop&crop=center' 
  },
  { 
    name: 'Barcelona Rave', 
    logo: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&h=60&fit=crop&crop=center' 
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % clients.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        py: 8,
        background: 'linear-gradient(90deg, rgba(139,92,246,0.1) 0%, rgba(236,72,153,0.1) 100%)',
        overflow: 'hidden',
      }}
    >
      <Box sx={{ maxWidth: 1200, mx: 'auto', px: 2 }}>
        <Typography
          variant="h6"
          sx={{
            textAlign: 'center',
            mb: 6,
            color: '#fff',
            fontWeight: 600,
            fontSize: '1.2rem',
          }}
        >
          Nuestros clientes confían en nosotros para llevar sus eventos al siguiente nivel
        </Typography>
        
        <Box sx={{ 
          position: 'relative', 
          height: 140,  // ← +40px altura contenedor
          width: '100%',
          overflow: 'hidden'
        }}>
          <motion.div
            animate={{ x: `-${currentIndex * 33.33}%` }}
            transition={{ 
              x: { 
                type: 'spring', 
                stiffness: 80,
                damping: 20,
                duration: 1.5
              }
            }}
            style={{
              display: 'flex',
              width: '300%',
              height: '100%',
            }}
          >
            {[...clients, ...clients].map((client, index) => (
              <Box
                key={`${client.name}-${index}`}
                sx={{
                  flex: '0 0 33.33%',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  opacity: index % 3 === currentIndex ? 1 : 0.4,
                  transition: 'opacity 1s ease',
                  filter: index % 3 === currentIndex ? 'none' : 'blur(2px)',
                }}
              >
                <Box
                  component="img"
                  src={client.logo}
                  alt={client.name}
                  sx={{
                    height: { xs: 70, sm: 85, md: 100 },  // ← MÁS GRANDES
                    width: 'auto',
                    maxWidth: '95%',  // ← Un poco más ancho
                    maxHeight: '100%', // ← No se sale del contenedor
                    filter: 'drop-shadow(0 15px 30px rgba(0,0,0,0.4))',  // ← Sombra más grande
                    borderRadius: '16px',  // ← Bordes más redondeados
                  }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <Box
                  sx={{
                    height: { xs: 70, sm: 85, md: 100 },  // ← MÁS GRANDES
                    width: 220,  // ← Más ancho
                    background: `linear-gradient(135deg, #8B5CF6 0%, #EC4899 50%, #F59E0B 100%)`,
                    borderRadius: '16px',
                    display: 'none',
                    alignItems: 'center',
                    justifyContent: 'center',
                    filter: 'drop-shadow(0 15px 30px rgba(0,0,0,0.4))',
                  }}
                >
                  <Typography 
                    variant="h5" 
                    sx={{ 
                      color: 'white', 
                      fontWeight: 900,
                      fontSize: { xs: '1rem', md: '1.3rem' }  // ← Texto más grande
                    }}
                  >
                    {client.name}
                  </Typography>
                </Box>
              </Box>
            ))}
          </motion.div>
        </Box>
      </Box>
    </Box>
  );
};

export default Carousel;

