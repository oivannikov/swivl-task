import React from 'react';

import './Header.scss';

export function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <h1 className="header__title">Synth</h1>

        <nav className="header__nav">
          <ul className="header__list">
            <li className="header__item header__item--active">FEED</li>
            <li className="header__item">EXPLORE</li>
            <li className="header__item">DISCUSSIONS</li>
          </ul>
        </nav>
      </div>

      <div className="header__right">
        <div className="header__user">
          <span className="header__user-name">Arthur Wood</span>
          <img className="header__user-photo" src="images/user.svg" alt="user" />
          <img className="header__user-settings" src="images/settings.svg" alt="icon settings" />
        </div>

        <div className="header__icons">
          <img className="header__notification" src="images/notification.svg" alt="icon notification" />
          <img className="header__gift" src="images/icon_gift.svg" alt="icon gift" />
          <img src="images/M.svg" alt="icon M" />
        </div>
      </div>
  
      <img className="header__change-photo" src="images/action_button.svg" />
    </div>
  );
}

