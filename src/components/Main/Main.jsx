import React from 'react';

import { Card } from '../Card/Card';
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
              <img className="main__link main__pencil" src="images/icon_edit.svg" alt="icon edit" />
              <div><a className="main__link" href="#">Edit Profile</a></div>
            </div>
          </div>

          <div className="main__option">
            <img src="images/options.png" alt="icon options"/>
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
          <div className="main__cards-top">
            <Card />
            <Card />
          </div>

          <div className="main__cards-bottom">
            <Card isAnalitika={true} headerWithAdress={true} />
            <Card isAnalitika={true} headerWithLinkCopy={true} />
          </div>
        </div>
      </div>
    </div>
  );
}
