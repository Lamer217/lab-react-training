import React from 'react';

export default function BoxColor({ r, g, b }) {
  function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  }

  function rgbToHex(r, g, b) {
    return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }
  return (
    <div
      style={{
        justifyContent: 'center',
        backgroundColor: `rgb(${r},${g},${b})`,
        textAlign: 'center',
      }}
    >
      rgb({r},{g},{b})
      <br />
      {rgbToHex(r, g, b)}
    </div>
  );
}
