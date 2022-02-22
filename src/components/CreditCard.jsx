import React from 'react';
import visaLogo from '../assets/images/visa.png';
import mcLogo from '../assets/images/master-card.svg';

export default function CreditCard({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) {
  let cardLogo;
  if (type === 'Visa') {
    cardLogo = visaLogo;
  }
  if (type === 'Master Card') {
    cardLogo = mcLogo;
  }
  return (
    <div className="card" style={{ backgroundColor: bgColor, color: color }}>
      <img src={cardLogo} alt="Card provider" />
      <span>
        &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull;
        &bull;&bull;&bull;&bull; {number.slice(-4)}
      </span>
      <div>
        <div>
          <span>
            Expires {expirationMonth}/{expirationYear}
          </span>
          <span>{bank}</span>
        </div>
        <span>{owner}</span>
      </div>
    </div>
  );
}
