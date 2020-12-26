import React from 'react';

import classNames from 'classnames';

import { Analitika } from './Analitika/Analitika';
import { Share } from './Share/Share';

import './Card.scss';

export function Card({ isAnalitika, headerWithAdress, headerWithLinkCopy }) {
  return (
    <div className={classNames('card', {'card__changePaddingTop': headerWithAdress || headerWithLinkCopy})}>
      { headerWithAdress && (
          <div className="card__header-share">
            <p>Shared to&thinsp;</p>
            <span className="card__header-adress">#discussionaboutanimgttdds...</span>
          </div>
      )}

      { headerWithLinkCopy && (
          <div className="card__header-share">
            <img className="card__header-link" src="images/icon_link_copy.svg" alt="icon copy" />
            <p>Shared via weblink</p>
          </div>
      )}

      <h3 className="card__title">New air routes that promise cheap flights in</h3>

      <div className="card__footer">
        <div className="card__footer-left">
          <div className="card__photo"></div>
          <p className="card__name">Gregory Watkins</p>
        </div>

        { isAnalitika ? <Analitika /> : <Share /> }
      </div>
    </div>
  );
}
