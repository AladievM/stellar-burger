import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styles from './modal.module.css';
import ModalOverlay from '../modal-overlay/modal-overlay';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

function Modal({ children, onClose, heading }) {
  const escFunction = React.useCallback(
    (event) => {
      if (event.key === 'Escape') {
        onClose(event);
      }
    },
    [onClose],
  );

  React.useEffect(() => {
    document.addEventListener('keydown', escFunction, false);

    return () => {
      document.removeEventListener('keydown', escFunction, false);
    };
  }, [escFunction]);

  return ReactDOM.createPortal ((
    <ModalOverlay onClose={onClose}>
      <div className={`${styles.container} `}>
        <div className="pr-15 mr-15" >
          <p className="text text_type_main-large pr-15 mt-8 mr-15 ">{heading}</p>
        </div>
        <span className={`${styles.closeIcon}  mt-10 mr-10  `}>
          <CloseIcon type="primary" onClick={onClose} />
        </span>
        {children}
      </div>
    </ModalOverlay>
  ),document.getElementById('modal'));
  
}

Modal.propTypes = {
  heading: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.element),
  onClose: PropTypes.func.isRequired,
};

export default Modal;
