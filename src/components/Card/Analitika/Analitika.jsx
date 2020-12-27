import React from 'react';

import './Analitika.scss';

export function Analitika() {
  return (
    <div className="rightFooter">
      <div className="rightFooter__play">
        <img className="rightFooter__play-photo" src="images/icon_play.svg" alt="icon play" />
        <span>88</span>
      </div>
      
      <div className="rightFooter__like">
        <img className="rightFooter__like-photo" src="images/icon_like.svg" alt="icon like" />
        <span>24</span>
      </div>
    </div>
  );
}
