import React from 'react';
import PropTypes from 'prop-types';

import styles from './modal-overlay.module.css';

function ModalOverlay( {children , onClose} ) {
  return (
    
      <div className={styles.modal} onClick={onClose}>
        {children}
      </div>
    
  );
}

ModalOverlay.propTypes = {
     onClose: PropTypes.func.isRequired,
     children: PropTypes.arrayOf(PropTypes.element)
}

export default ModalOverlay;
