import React from 'react';
import './Modal.css'; // Добавьте стили для модального окна

const Modal = (isHovered) => {
    return (
        <div className={`modal ${isHovered ? 'fade-in' : ''}`}>
            Здесь будет регистрация
        </div>
    );
};

export default Modal;