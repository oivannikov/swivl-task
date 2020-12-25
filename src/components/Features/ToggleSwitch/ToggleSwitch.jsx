import React from 'react';

import './ToggleSwitch.scss';

export function ToggleSwitch() {
  return (
    <div className="content">
      <label className="switch">
        <input type="checkbox" />
        <span className="slider round"></span>
      </label>
    </div>
  );
}