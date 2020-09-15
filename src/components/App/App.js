import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Main from '../Main';
import Footer from '../Footer/Footer';
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import ImagePopup from "../ImagePopup/ImagePopup";


function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);


  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
  }

  return (
    <div className="page">
    <Header />
    <Main
      onEditAvatar={handleEditAvatarClick}
      onEditProfile={handleEditProfileClick}
      onAddPlace={handleAddPlaceClick}
    />
    <Footer />

    <PopupWithForm
      name="profile"
      title="Редактировать профиль"
      isOpen={isEditProfilePopupOpen}
      onClose={closeAllPopups}
    >
      <label className="popup__field">
        <input type="text" className="popup__input popup__input_type_name" name="name" value="type here" minLength="2" maxLength="40" required />
        <span className="popup__error"></span>
      </label>
      <label className="popup__field">
        <input type="text" className="popup__input popup__input_type_job" name="about" value="type here" minLength="2" maxLength="200" required />
        <span className="popup__error"></span>
      </label>
    </PopupWithForm>

      <PopupWithForm
        name="elements"
        title="Новое место"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <label className="popup__field">
          <input type="text" className="popup__input popup__input_type_name" name="name" value="type here"
                 minLength="2" maxLength="40" required />
          <span className="popup__error"></span>
        </label>
        <label className="popup__field">
          <input type="text" className="popup__input popup__input_type_job" name="about" value="type here"
                 minLength="2"
                 maxLength="200" required />
          <span className="popup__error"></span>
        </label>
      </PopupWithForm>

      <PopupWithForm
        name="avatar"
        title="Обновить аватар"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <label className="popup__field">*/}
          <input type="url" className="popup__input popup__input_type_link" name="link" value="" placeholder="Ссылка на картинку" required />
          <span className="popup__error"></span>
        </label>
      </PopupWithForm>

      <PopupWithForm
        name="card-delete"
        title="Вы уверены?"
        onClose={closeAllPopups}
      >
        <label className="popup__field">*/}
          <input type="url" className="popup__input popup__input_type_link" name="link" value="" placeholder="Ссылка на картинку" required />
          <span className="popup__error"></span>
        </label>
      </PopupWithForm>

      <ImagePopup />

      <template className="template-element">
        <li className="elements__item">
          <button type="button" className="button button_delete">
            <svg width="18" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2.458 18.142c.06.67.61 1.158 1.28 1.158H14.26c.67 0 1.22-.508 1.28-1.158L16.72 5.79H1.28l1.178 12.352zM16.72 1.93h-5.14v-.65C11.58.569 11.011 0 10.3 0H7.72C7.01 0 6.44.569 6.44 1.28v.65H1.28C.569 1.93 0 2.499 0 3.21c0 .711.569 1.28 1.28 1.28h15.44c.711 0 1.28-.569 1.28-1.28 0-.711-.569-1.28-1.28-1.28z"
                fill="#fff"/>
            </svg>
          </button>
          <img src="#" alt="изображение места" className="elements__img" />
            <div className="elements__wrap">
              <h2 className="elements__title"></h2>
              <div className="elements__container">
                <button type="button" className="button button__like"></button>
                <h3 className="elements__likes"></h3>
              </div>
            </div>
        </li>
      </template>
    </div>
  );
}
export default App;
