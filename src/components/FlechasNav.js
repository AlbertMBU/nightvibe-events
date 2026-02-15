import React from 'react';
import { IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';

const FlechasNav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  const esClicka = pathname.includes('clicka-digital');
  const esInvitaciones = pathname.includes('invitaciones');
  const esAcceso = pathname.includes('acceso');
  const esAnaliticas = pathname.includes('analiticas');
  const esAforos = pathname.includes('aforos');

  const mostrarIzquierda = !esClicka;
  const mostrarDerecha = !esAforos;

  const handleLeftClick = () => {
    if (esInvitaciones) navigate('/modulos/clicka-digital');
    else if (esAcceso) navigate('/modulos/invitaciones');
    else if (esAnaliticas) navigate('/modulos/acceso');
    else if (esAforos) navigate('/modulos/analiticas');
  };

  const handleRightClick = () => {
    if (esClicka) navigate('/modulos/invitaciones');
    else if (esInvitaciones) navigate('/modulos/acceso');
    else if (esAcceso) navigate('/modulos/analiticas');
    else if (esAnaliticas) navigate('/modulos/aforos');
  };

  return (
    <>
      {mostrarIzquierda && (
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.15, x: -4 }}
          transition={{ type: 'spring', stiffness: 200, damping: 18 }}
          style={{
            position: 'fixed',
            top: '50%',
            left: 24,
            transform: 'translateY(-50%)',
            zIndex: 1200
          }}
        >
          <IconButton
            onClick={handleLeftClick}
            sx={{
              width: 56,
              height: 56,
              borderRadius: '18px',
              background:
                'linear-gradient(45deg, #8B5CF6 0%, #EC4899 100%)',
              color: 'white',
              boxShadow: '0 8px 25px rgba(139,92,246,0.4)',
              '&:hover': {
                boxShadow: '0 12px 35px rgba(139,92,246,0.6)'
              }
            }}
          >
            <FaArrowLeft size={28} />
          </IconButton>
        </motion.div>
      )}

      {mostrarDerecha && (
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.15, x: 4 }}
          transition={{ type: 'spring', stiffness: 200, damping: 18 }}
          style={{
            position: 'fixed',
            top: '50%',
            right: 24,
            transform: 'translateY(-50%)',
            zIndex: 1200
          }}
        >
          <IconButton
            onClick={handleRightClick}
            sx={{
              width: 56,
              height: 56,
              borderRadius: '18px',
              background:
                'linear-gradient(45deg, #8B5CF6 0%, #EC4899 100%)',
              color: 'white',
              boxShadow: '0 8px 25px rgba(139,92,246,0.4)',
              '&:hover': {
                boxShadow: '0 12px 35px rgba(139,92,246,0.6)'
              }
            }}
          >
            <FaArrowRight size={28} />
          </IconButton>
        </motion.div>
      )}
    </>
  );
};

export default FlechasNav;
