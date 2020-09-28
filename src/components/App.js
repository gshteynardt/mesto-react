import React, {useEffect, useState} from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import { EditProfilePopup } from './EditProfilePopup';
import ImagePopup from './ImagePopup';
import api from '../utils/api.js';
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { InitialCards } from "../contexts/initialCards";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);

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

  useEffect(() => {
    api.getAppInfo()
      .then(data => {
        const [initialCards, currentUserData ] = data;
        setCurrentUser(currentUserData);

        const items = initialCards.map( card => (
                  {
                    link: card.link,
                    likes: card.likes,
                    name: card.name,
                    _id: card._id,
                    ownerId: card.owner._id
                  }
                  )
                );
                setCards(items);
      })
      .catch(err => console.log(err))
  }, [])

  //обновляем данные пользователя
  const handleUpdateUser = (data) => {
    api.editUserInfo(data)
      .then(data => {
        setCurrentUser(data);
        closeAllPopups();
      }
    )
  }

  //функция лайков и дизлайков
  const handleCardLike = (card) => {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {

      // Формируем новый массив на основе имеющегося, подставляя в него новую карточку
      const newCards = cards.map(c => c._id === card._id ? newCard : c);

      // Обновляем стейт
      setCards(newCards)
    });
  }

  //обработчик удаления карточек
  const handleCardDelete = (card) => {
    api.deleteCard(card._id)
      .then(() => {
        const newCards = cards.filter(c => c._id !== card._id)

        setCards(newCards)
      });
  }

  return (
    <InitialCards.Provider value={cards}>
      <CurrentUserContext.Provider value={currentUser}>
        <div className="page">
          <Header />
          <Main
            onEditAvatar={handleEditAvatarClick}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onCardClick={setSelectedCard}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
          />
          <Footer />

          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
          />

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
      </CurrentUserContext.Provider>
    </InitialCards.Provider>
  );
}
export default App;
