import React, {useState, useEffect} from "react";
import api from '../utils/api';


const Main = ({onAddPlace, onEditAvatar, onEditProfile}) =>  {
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

        setCards(initialCards.map( card => {
        return <>
            <li className="elements__item">
              <button type="button" className="button button_delete">
                <svg width="18" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M2.458 18.142c.06.67.61 1.158 1.28 1.158H14.26c.67 0 1.22-.508 1.28-1.158L16.72 5.79H1.28l1.178 12.352zM16.72 1.93h-5.14v-.65C11.58.569 11.011 0 10.3 0H7.72C7.01 0 6.44.569 6.44 1.28v.65H1.28C.569 1.93 0 2.499 0 3.21c0 .711.569 1.28 1.28 1.28h15.44c.711 0 1.28-.569 1.28-1.28 0-.711-.569-1.28-1.28-1.28z"
                    fill="#fff"/>
                </svg>
              </button>
              <img src={card.link} alt={card.name} className="elements__img" />
              <div className="elements__wrap">
                <h2 className="elements__title">{card.name}</h2>
                <div className="elements__container">
                  <button type="button" className="button button__like"></button>
                  <h3 className="elements__likes">{card.likes.length}</h3>
                </div>
              </div>
            </li>
          </>
        }))


        console.log(cards)
        console.log(data);
      })
  });

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