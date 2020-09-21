import React from "react";

const ImagePopup = ({card, onClose}) => {

  const link = card ? card.link : '#';
  const name = card ? card.name : '';

  const className = `popup popup_theme_image ${card && 'popup_opened'}`
  return(
    <section className={className} >
      <div className="popup__container popup__container_theme_img">
        <button type="button" className="button popup__close"
                onClick={onClose}
        >
        </button>
        <img src={link} alt={name} className="popup__img" />
        <p className="popup__caption">{name}</p>
      </div>
    </section>
  );
}

export default ImagePopup;