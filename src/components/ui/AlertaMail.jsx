import React from 'react';
import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';

const Alerta = styled.div`
  background-color: ${({ mailSentStatus }) =>
    mailSentStatus ? '#38c438' : '#c03939'};
  padding: 1rem;
  border-radius: 0.7rem;
  color: var(--brighter);
  width: 100%;

  margin-top: 1rem;

  transition: all 0.8s ease-in-out;
`;

const AlertaMail = ({ mailSentStatus }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ type: 'spring', duration: 1.5 }}
      >
        <Alerta mailSentStatus={mailSentStatus}>
          {mailSentStatus
            ? 'E-Mail enviado exitosamente'
            : 'Error al enviar el E-Mail'}
        </Alerta>
      </motion.div>
    </AnimatePresence>
  );
};

export default AlertaMail;
