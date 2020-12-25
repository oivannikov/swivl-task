import React from 'react';

import './CardTop.scss';

export function CardTop() {
  return (
    <div className="main__card">
      <h3 className="main__card-text">New air routes that promise cheap flights in</h3>

      <div className="main__card-footer">
        <div className="main__footer-left">
          <span className="main__card-photo"></span>
          <p className="main__footer-name">Gregory Watkins</p>
        </div>
        <span className="main__share">Share</span>
      </div>
    </div>
  );
}
