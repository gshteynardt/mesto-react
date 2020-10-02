import React, {useContext} from "react";
import PopupWithForm from './PopupWithForm'
import { TextForSubmitBtn } from "../contexts/TextForSubmitBtn";

export const PopupDeleteCard = ({card, isOpen, onClose, onCardDelete}) => {
  const textForSubmitBtn = useContext(TextForSubmitBtn);

  const handleDeleteClick = (e) => {
    e.preventDefault();
    onCardDelete(card);
  }

  return (
    <PopupWithForm
      name="card-delete popup__title_theme_card-delete"
      title="Вы уверены?"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleDeleteClick}
      textSubmitBtn={textForSubmitBtn.confirm}
    >
      <label className="popup__field">
        <span className="popup__error"></span>
      </label>
    </PopupWithForm>
  );
}