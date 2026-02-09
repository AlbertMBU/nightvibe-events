import React from 'react';
import { Box, Typography, Grid, IconButton } from '@mui/material';
import { 
  Facebook, 
  Instagram, 
  WhatsApp 
} from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      sx={{
        py: 8,
        px: { xs: 2, md: 4 },
        background: 'linear-gradient(180deg, rgba(0,0,0,0.95) 0%, rgba(139,92,246,0.1) 100%)',
        borderTop: '1px solid rgba(139,92,246,0.2)',
      }}
    >
      <Box sx={{ maxWidth: 1200, mx: 'auto' }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={4}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 900,
                background: 'linear-gradient(45deg, #8B5CF6, #EC4899)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 1,
              }}
            >
              Fest2fun
            </Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.7)' }}>
              Transformando la noche en experiencias inolvidables
            </Typography>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ mb: 2, color: '#fff', fontWeight: 600 }}>
              Contacto
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Typography sx={{ color: 'rgba(255,255,255,0.8)' }}>
                📧 hola@fest2fun.com
              </Typography>
              <Typography sx={{ color: 'rgba(255,255,255,0.8)' }}>
                📱 +34 600 123 456
              </Typography>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ mb: 2, color: '#fff', fontWeight: 600 }}>
              Síguenos
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton sx={{ color: '#8B5CF6', '&:hover': { bgcolor: 'rgba(139,92,246,0.1)' } }}>
                <Facebook />
              </IconButton>
              <IconButton sx={{ color: '#EC4899', '&:hover': { bgcolor: 'rgba(236,72,153,0.1)' } }}>
                <Instagram />
              </IconButton>
              <IconButton sx={{ color: '#25D366', '&:hover': { bgcolor: 'rgba(37,211,102,0.1)' } }}>
                <WhatsApp />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ mt: 6, pt: 4, borderTop: '1px solid rgba(255,255,255,0.1)', textAlign: 'center' }}>
          <Typography sx={{ color: 'rgba(255,255,255,0.6)' }}>
            © 2026 Fest2fun. Todos los derechos reservados.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
