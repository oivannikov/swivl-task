import React from 'react';

import { CardBottom } from '../CardBottom/CardBottom';
import { CardTop } from '../CardTop/CardTop';
import { ToggleSwitch } from '../Features/ToggleSwitch/ToggleSwitch';

import './Main.scss';

export function Main() {
  return (
    <div className="main">
      <div className="main__left">
        <div className="main__left-header">
          <div className="main__avatar">
            <img src="images/avatar.svg" alt="avatar" />
          </div>

          <div className="main__info">
            <h2 className="main__name">Benjamin Clementine</h2>
            <span className="main__nick">@benclementine</span>
            <div className="main__edit">
              <span className="main__link main__pencil">&#9998;</span>
              <a className="main__link" href="#">Edit Profile</a>
            </div>
          </div>

          <div className="main__options">
            <img src="images/options.png" alt="sign options"/>
          </div>
        </div>  

        <div className="main__left-section">
          <div className="main__synths">
            <span className="main__number">45</span>
            <p>synths</p>
          </div>

          <div className="main__followers">
            <span className="main__number">110</span>
            <p>followers</p>
          </div>

          <div className="main__following">
            <span className="main__number">322</span>
            <p>following</p>
          </div>
        </div>

        <div className="main__left-footer">
          <p className="main__text">
            Cryptocurrencies including Ethereum, Ripple, and Litecoin have all plunged between 20 to 30 percent each, according to      CoinMarketCap. Here is the latest Ripple price news and live updates on XRP, bitcoin and Ethereum.
          </p>
        </div>
      </div>

      <div className="main__right">
        <div className="main__switch">
          <span className="main__public">Public</span>
          <ToggleSwitch />
          <span>Private</span>
        </div>

        <div className="main__cards">
          <div className="main__card-1">
            <CardTop />
            <CardTop />
          </div>

          <div className="main__card-2">
            <CardBottom />
          </div>
        </div>
      </div>
    </div>
  );
}
