import React, { useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';



function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

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
    setSelectedCard(null);
  }

  return (
    <div className="page">
    <Header />
    <Main
      onEditAvatar={handleEditAvatarClick}
      onEditProfile={handleEditProfileClick}
      onAddPlace={handleAddPlaceClick}
      onCardClick={setSelectedCard}
    />
    <Footer />

    <PopupWithForm
      name="profile"
      title="Редактировать профиль"
      isOpen={isEditProfilePopupOpen}
      onClose={closeAllPopups}
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

      <PopupWithForm
        name="elements"
        title="Новое место"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <label className="popup__field">
          <input type="text" className="popup__input popup__input_type_place" name="name"
                 placeholder="Название"
                 minLength="1" maxLength="30" required />
            <span className="popup__error"></span>
        </label>

        <label className="popup__field">
          <input type="url" className="popup__input popup__input_type_link" name="link"
                 placeholder="Ссылка на картинку" required />
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
          <input type="url" className="popup__input popup__input_type_link" name="link"  placeholder="Ссылка на картинку" required />
          <span className="popup__error"></span>
        </label>
      </PopupWithForm>

      <PopupWithForm
        name="card-delete"
        title="Вы уверены?"
        onClose={closeAllPopups}
      >
        <label className="popup__field">*/}
          <input type="url" className="popup__input popup__input_type_link" name="link"  placeholder="Ссылка на картинку" required />
          <span className="popup__error"></span>
        </label>
      </PopupWithForm>

      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
      />

    </div>
  );
}
export default App;
