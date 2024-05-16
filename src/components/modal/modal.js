import React from 'react';
import Modal from 'react-modal';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)'
    },
  };

Modal.setAppElement('#root');

export const ModalGlobal = ({title, text, backText, modalIsOpen, closeModal}) => {
    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Modal"
       >
            <h2 className='modal__title'>{title}</h2>
            <p className='modal__text'>{text}</p>
            <button onClick={closeModal} className='modal__button'>{backText}</button>
        </Modal>
    );
}
