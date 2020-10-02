import React from "react";
import PopupWithForm from './PopupWithForm'
export const PopupDeleteCard = ({card, isOpen, onClose, onCardDelete}) => {

  const handleDeleteClick = (e) => {
    e.preventDefault();
    onCardDelete(card);
  }

  return (
    <PopupWithForm
      name="card-delete"
      title="Вы уверены?"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleDeleteClick}
    >
      <label className="popup__field">
        <input type="url" className="popup__input popup__input_type_link" name="link"  placeholder="Ссылка на картинку" required />
        <span className="popup__error"></span>
      </label>
    </PopupWithForm>
  );
}