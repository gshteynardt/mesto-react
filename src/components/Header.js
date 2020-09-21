import logoPath from "../images/logo_mesto.svg";
import React from "react";

function Header() {
  return(
    <header className="header page__header">
      <picture className="logo header__logo">
        <img className="logo__img" src={logoPath} alt="логотип"/>
      </picture>
    </header>
  );
}

export default Header;