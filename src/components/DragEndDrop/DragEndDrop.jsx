import React from 'react';

import './DragEndDrop.scss';

export function DragEndDrop() {
  return (
    <div className="dragenddrop">
      <div className="dragenddrop__edit-user">
        <div className="dragenddrop__wrapper">
          <img className="dragenddrop__edit-icon" src="images/icon_edit-user.svg" alt="icon edit user" />
          <p>Report User</p>
        </div>
      </div>

      <div className="dragenddrop__block-user">
        <div className="dragenddrop__wrapper">
          <img className="dragenddrop__block-icon" src="images/icon_block-user.svg" alt="icon block user" />
          <p>Block User</p>
        </div>
      </div>
  </div> 
  );
}
