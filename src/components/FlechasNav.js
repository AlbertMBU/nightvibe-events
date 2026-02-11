import React from 'react';
import { IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';

const FlechasNav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  // Detecta página actual y muestra flechas correctas
  const esInvitaciones = pathname.includes('invitaciones');
  const esAcceso = pathname.includes('acceso');
  const esAnaliticas = pathname.includes('analiticas');
  const esAforos = pathname.includes('aforos');

  return (
    <>
      {/* Flecha IZQUIERDA (solo si NO es primera página) */}
      {(!esInvitaciones) && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.8, scale: 1 }}  // ← Solo entrada suave, SIN infinito
          whileHover={{ scale: 1.3, opacity: 1 }}  // ← Reactiva al hover
          style={{
            position: 'fixed',
            top: '50%',
            left: 20,
            transform: 'translateY(-50%)',
            zIndex: 1000,
          }}
        >
          <IconButton
            onClick={() => {
              if (esAcceso) navigate('/modulos/invitaciones');
              else if (esAnaliticas) navigate('/modulos/acceso');
              else if (esAforos) navigate('/modulos/analiticas');
            }}
            sx={{
              background: 'linear-gradient(45deg, #8B5CF6 0%, #EC4899 100%)',
              color: 'white',
              boxShadow: '0 8px 25px rgba(139,92,246,0.4)',
              '&:hover': { boxShadow: '0 12px 35px rgba(139,92,246,0.6)' },
            }}
          >
            <FaArrowLeft size={28} />
          </IconButton>
        </motion.div>
      )}

      {/* Flecha DERECHA (solo si NO es última página) */}
      {(!esAforos) && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.8, scale: 1 }}  // ← Solo entrada suave, SIN infinito
          whileHover={{ scale: 1.3, opacity: 1 }}  // ← Reactiva al hover
          style={{
            position: 'fixed',
            top: '50%',
            right: 20,
            transform: 'translateY(-50%)',
            zIndex: 1000,
          }}
        >
          <IconButton
            onClick={() => {
              if (esInvitaciones) navigate('/modulos/acceso');
              else if (esAcceso) navigate('/modulos/analiticas');
              else if (esAnaliticas) navigate('/modulos/aforos');
            }}
            sx={{
              background: 'linear-gradient(45deg, #8B5CF6 0%, #EC4899 100%)',
              color: 'white',
              boxShadow: '0 8px 25px rgba(139,92,246,0.4)',
              '&:hover': { boxShadow: '0 12px 35px rgba(139,92,246,0.6)' },
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
