import React from 'react';

export default function Random({ min, max }) {
  return (
    <div>
      Random value between {min} and {max} =&gt;
      {Math.floor(Math.random() * (max - min + 1) + min)}
    </div>
  );
}
