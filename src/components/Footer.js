import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { WhatsApp, Facebook, Instagram } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box 
      id="contacto"  // ← SCROLL DEL HEADER LLEGA AL FINAL
      sx={{ 
        py: 4, 
        background: 'linear-gradient(135deg, #000 0%, #1a0033 100%)',
        textAlign: 'center',
        borderTop: '1px solid rgba(139,92,246,0.3)'
      }}
    >
      <Typography sx={{ mb: 2, color: '#EC4899', fontWeight: 700 }}>
        Fest2.fun experiencias inolvidables
      </Typography>
      
      <Box sx={{ mb: 3 }}>
        <Typography variant="body1" sx={{ mb: 1 }}>
          📞 <a href="tel:+34666123456" style={{ color: '#8B5CF6' }}>+34 666 123 456</a>
        </Typography>
        <Typography variant="body1">
          ✉️ <a href="mailto:info@fest2.fun" style={{ color: '#EC4899' }}>info@fest2.fun</a>
        </Typography>
      </Box>

      <Box sx={{ mb: 3 }}>
        <IconButton href="https://wa.me/34666123456" target="_blank" size="large" sx={{ mx: 1, color: '#25D366' }}>
          <WhatsApp fontSize="large" />
        </IconButton>
        <IconButton href="#" target="_blank" size="large" sx={{ mx: 1, color: '#4267B2' }}>
          <Facebook fontSize="large" />
        </IconButton>
        <IconButton href="#" target="_blank" size="large" sx={{ mx: 1, color: '#E4405F' }}>
          <Instagram fontSize="large" />
        </IconButton>
      </Box>

      <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
        © 2026 Fest2.fun. Todos los derechos reservados.
      </Typography>
    </Box>
  );
};

export default Footer;
