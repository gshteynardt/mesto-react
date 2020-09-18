import React, {useState, useEffect} from "react";
import api from '../utils/api';
import Card from '../components/Card/Card';

const Main = ({onAddPlace, onEditAvatar, onEditProfile, onCardClick}) =>  {
  const [userName, setUserName] = useState();
  const [userDescription, setUserDescription] = useState();
  const [userAvatar, setUserAvatar] = useState();
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getAppInfo()
      .then(data => {
        const [initialCards, profileData] = data;
        setUserName(profileData.name);
        setUserDescription(profileData.about);
        setUserAvatar(profileData.avatar);

        setCards(initialCards.map( card => (<Card
          card = {card}
          key={card._id}
          onCardClick={onCardClick}
          />)
        ));
      })
  }, []);

  return(
    <>
      <main className="page__content">
        <div className="lds-default">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <section className="profile page__profile">
          <div className="profile__info">
            <div className="profile__wrap">
              <img src={userAvatar} alt="фотография пользователя" className="profile__avatar"/>
              <button type="button" className="button button_edit-avatar" onClick={onEditAvatar}>
                <svg width="26" height="26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M26 3.454L6.77 22.794 3.336 19.29 22.517 0 26 3.454zM0 26l5.102-1.53-3.581-3.453L0 26z"
                        fill="#fff"/>
                </svg>
              </button>
            </div>
            <div className="profile__container">
              <h2 className="profile__name">{userName}</h2>
              <p className="profile__job">{userDescription}</p>
              <button type="button" className="button button_edit" onClick={onEditProfile}></button>
            </div>
          </div>
          <button type="button" className="button button_add" onClick={onAddPlace}></button>
        </section>
        <section className="elements">
          <ul className="elements__items">
            {cards}
          </ul>
        </section>
      </main>

    </>
  );
}

export default Main;