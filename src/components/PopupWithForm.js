import React from "react";


function PopupWithForm({name, title, isOpen, onClose, children, onSubmit, textSubmitBtn}) {

  const className = `popup popup_theme_${name} ${isOpen && 'popup_opened'}`
  return(
    <section className={className}>
      <div className="popup__container">
        <button type="button" className="button popup__close" onClick={onClose}>
        </button>
        <form
          className={`popup__content popup__content_theme_${name}`}
          noValidate
          onSubmit={onSubmit}
        >
          <h2 className="popup__title popup__title_theme_profile">{title}</h2>
          <div className="popup__fields">
            {children}
            <button type="submit" className="button button_submit">
              {textSubmitBtn}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default PopupWithForm;