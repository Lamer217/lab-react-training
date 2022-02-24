import React from 'react';

export default function Rating({ children }) {
  const rate = Math.round(children);
  let stars;
  stars = '★'.repeat(rate);
  while (stars.length < 5) stars += '☆';

  return <div>{stars}</div>;
}
