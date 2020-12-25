import React from 'react';

import './CardBottom.scss';

export function CardBottom() {
  return (
    <div className="cardBottom">
      <h3 className="cardBottom__card-text">New air routes that promise cheap flights in</h3>

      <div className="cardBottom__card-footer">
        <div className="cardBottom__footer-left">
          <span className="cardBottom__card-photo"></span>
          <p className="cardBottom__footer-name">Gregory Watkins</p>
        </div>
        <div className="">
          <div>
            <img src="images/play.svg" alt="play" />
            <span>88</span>
          </div>
          
          <div>
            <img src="images/like.svg" alt="like" />
            <span>24</span>
          </div>
        </div>
      </div>
    </div>
  );
}