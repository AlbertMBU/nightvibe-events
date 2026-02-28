import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';

const clients = [
  { name: 'OFF SONAR', logo: '/logos/OFFSONAR_negro.png' },
  { name: 'Hivernacle', logo: '/logos/hivernacle02.png' },
  { name: 'Brunch Elektronik', logo: '/logos/BrunchElectronik_blanco.png' },
  { name: 'Halloween Takeover', logo: '/logos/Halloween_Takeover_morado.png' },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % clients.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleImageLoad = (logo) => {
    setImageLoaded(prev => ({ ...prev, [logo]: true }));
  };

  const handleImageError = (logo) => {
    setImageLoaded(prev => ({ ...prev, [logo]: false }));
  };

  const currentClient = clients[currentIndex];
  const showName = !imageLoaded[currentClient.logo];

  return (
    <Box sx={{ maxWidth: 1200, mx: 'auto', py: 6 }}>
      <Typography variant="h5" align="center" sx={{ mb: 6, color: 'white', fontWeight: 700 }}>
        Nuestros clientes confían en nosotros
      </Typography>
      
      <Box sx={{ 
        width: '100%', 
        height: { xs: '140px', md: '180px' },
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ x: '100%', opacity: 0 }}  // ← ENTRA DESDE DERECHA
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '-100%', opacity: 0 }}     // ← SALE POR IZQUIERDA
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              width: { xs: '280px', md: '380px' },
              height: '100%',
              mx: 'auto',
            }}
          >
            <Box sx={{
              width: '100%',
              height: '100%',
              borderRadius: 2,
              background: 'rgba(255,255,255,0.03)',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 8px 25px rgba(0,0,0,0.4)',
              border: '1px solid rgba(255,255,255,0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              p: 2,
            }}>
              <Box sx={{ 
                textAlign: 'center', 
                width: '100%', 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                justifyContent: 'center' 
              }}>
                <img
                  src={currentClient.logo}
                  alt={currentClient.name}
                  style={{
                    width: 'auto',
                    height: 'auto',
                    maxWidth: '260px',
                    maxHeight: '100px',
                    objectFit: 'contain',
                    display: showName ? 'none' : 'block',
                    margin: '0 auto',
                  }}
                  onLoad={() => handleImageLoad(currentClient.logo)}
                  onError={() => handleImageError(currentClient.logo)}
                />
                
                {showName && (
                  <Typography
                    variant="h6"
                    sx={{
                      color: 'white',
                      fontWeight: 700,
                      fontSize: { xs: '1.1rem', md: '1.3rem' },
                      mt: 1,
                    }}
                  >
                    {currentClient.name}
                  </Typography>
                )}
              </Box>
            </Box>
          </motion.div>
        </AnimatePresence>
      </Box>
    </Box>
  );
};

export default Carousel;
