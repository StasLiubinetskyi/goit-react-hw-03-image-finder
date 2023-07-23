import React from 'react';
import PropTypes from 'prop-types';
import { Overlay, ModalContainer, ModalImage } from './Modal.styled';

const Modal = ({ largeImageURL, onClose }) => {
  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return (
    <Overlay onClick={handleBackdropClick}>
      <ModalContainer className="modal">
        <ModalImage src={largeImageURL} alt="" />
      </ModalContainer>
    </Overlay>
  );
};

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
