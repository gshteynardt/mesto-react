import PopupWithForm from './PopupWithForm'
import React from "react";

export const EditProfilePopup = ({isOpen, onClose}) => {
  return(
    <PopupWithForm
      name="profile"
      title="Редактировать профиль"
      isOpen={isOpen}
      onClose={onClose}
    >
      <label className="popup__field">
        <input type="text" className="popup__input popup__input_type_name" name="name" placeholder="Ваше имя" minLength="2" maxLength="40" required />
        <span className="popup__error"></span>
      </label>
      <label className="popup__field">
        <input type="text" className="popup__input popup__input_type_job" name="about"  placeholder="Ваша профессия" minLength="2" maxLength="200" required />
        <span className="popup__error"></span>
      </label>
    </PopupWithForm>
  );
}
