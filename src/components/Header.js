import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';
import { motion } from 'framer-motion';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setOpenMenu(false);
  };

  const getSectionName = (section) => {
    const names = {
      home: 'Home',
      modulos: 'Módulos',
      sectores: 'Sectores',
      contacto: 'Contacto'
    };
    return names[section] || section;
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        background: scrolled
          ? 'rgba(0,0,0,0.95)'
          : 'linear-gradient(180deg, rgba(0,0,0,0.9) 0%, transparent 100%)',
        backdropFilter: 'blur(20px)',
        boxShadow: scrolled ? 3 : 'none',
        transition: 'all 0.3s ease',
        py: 1,
      }}
      elevation={0}
    >
      <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, md: 4 } }}>
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 900,
              background: 'linear-gradient(45deg, #8B5CF6 0%, #EC4899 50%, #F59E0B 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 0 30px rgba(139,92,246,0.5)',
              cursor: 'pointer',
            }}
            onClick={() => scrollToSection('home')}
          >
            Fest2.fun
          </Typography>
        </motion.div>

        {/* Menú Desktop: Home, Módulos, Sectores, Contacto */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
          {['home', 'modulos', 'sectores', 'contacto'].map((section) => (
            <Button
              key={section}
              color="inherit"
              sx={{
                fontWeight: 600,
                fontSize: '1rem',
                position: 'relative',
                '&:after': {
                  content: '""',
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: 0,
                  height: '2px',
                  background: 'linear-gradient(90deg, #8B5CF6, #EC4899)',
                  transition: 'width 0.3s ease',
                },
                '&:hover:after': {
                  width: '100%',
                },
              }}
              onClick={() => scrollToSection(section)}
            >
              {getSectionName(section)}
            </Button>
          ))}
        </Box>

        {/* Botón Menú Móvil */}
        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
          <Button onClick={() => setOpenMenu(!openMenu)}>
            ☰ Menu
          </Button>
        </Box>
      </Toolbar>

      {/* Menú Móvil Dropdown */}
      {openMenu && (
        <Box
          sx={{
            display: { xs: 'block', md: 'none' },
            background: 'rgba(0,0,0,0.95)',
            backdropFilter: 'blur(20px)',
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            py: 2,
          }}
        >
          {['home', 'modulos', 'sectores', 'contacto'].map((section) => (
            <Button
              key={section}
              fullWidth
              sx={{ 
                justifyContent: 'flex-start', 
                my: 1, 
                mx: 2,
                fontSize: '1.1rem'
              }}
              onClick={() => scrollToSection(section)}
            >
              {getSectionName(section)}
            </Button>
          ))}
        </Box>
      )}
    </AppBar>
  );
};

export default Header;
