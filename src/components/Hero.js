import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa';

const Hero = () => {
  const scrollToModules = () => {
    document.getElementById('modulos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box
      id="home"
      sx={{
        height: { xs: '90vh', sm: '85vh', md: '80vh' },
        // minHeight: '100vh', // ✅ Asegura que el hero siempre ocupe al menos toda la pantalla // scroll demasidao largo
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        px: { xs: 2, md: 4 },
        pt: { xs: 12, md: 16 },
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #000 0%, #8B5CF6 30%, #EC4899 60%, #000 100%)',
        backgroundSize: '400% 400%',
        animation: 'gradientShift 15s ease infinite',
        '@keyframes gradientShift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Typography
          variant="h1"
          sx={{
            mb: 3,
            background: 'linear-gradient(45deg, #fff 0%, #F59E0B 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 0 60px rgba(255,255,255,0.5)',
          }}
        >
          ¡Vive tu evento al máximo!
        </Typography>
        
        <Typography
          variant="h4"
          sx={{
            mb: 6,
            maxWidth: '850px',
            mx: 'auto',
            fontWeight: 400,
            color: 'rgba(255,255,255,0.9)',
          }}
        >
          Soluciones para eventos, discotecas, festivales y +
        </Typography>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            variant="contained"
            size="large"
            sx={{
              background: 'linear-gradient(45deg, #8B5CF6 0%, #EC4899 100%)',
              boxShadow: '0 10px 30px rgba(139,92,246,0.4)',
              fontSize: '1.2rem',
              px: 6,
              py: 2,
              '&:hover': {
                boxShadow: '0 15px 40px rgba(139,92,246,0.6)',
                background: 'linear-gradient(45deg, #EC4899 0%, #8B5CF6 100%)',
              },
            }}
            onClick={scrollToModules}
          >
            Explora Módulos
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        style={{ position: 'absolute', bottom: 40, left: '50%', transform: 'translateX(-50%)' }}
      >
        <FaArrowDown size={30} color="#fff" opacity={0.7} />
      </motion.div>
    </Box>
  );
};

export default Hero;
