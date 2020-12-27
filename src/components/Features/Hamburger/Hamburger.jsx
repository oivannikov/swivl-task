import React from 'react';

import './Hamburger.scss';

export function Hamburger() {
  return (
    <>
      <input
        className="hamburger__toggle"
        type="checkbox"
        id="hamburger"
        name="toggle"
      />
      <label className="hamburger__btn" htmlFor="hamburger">
        <span />
      </label>
    </>
  );
}
