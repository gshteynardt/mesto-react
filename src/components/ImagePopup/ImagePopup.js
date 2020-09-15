import React from "react";

function ImagePopup() {
  return(
    <section className="popup popup_theme_image">
      <div className="popup__container popup__container_theme_img">
        <button type="button" className="button popup__close">
        </button>
        <img src="#" alt="" className="popup__img" />
        <p className="popup__caption"></p>
      </div>
    </section>
  );
}

export default ImagePopup;