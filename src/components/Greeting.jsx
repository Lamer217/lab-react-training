import React from 'react';

export default function Greeting({ lang, children }) {
  let localHi = '';
  if (lang === 'de') {
    localHi = 'Hallo';
  } else {
    localHi = 'Bonjour';
  }
  return (
    <div>
      {localHi} {children}
    </div>
  );
}
