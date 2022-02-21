import React from 'react';
import './IdCard.css';

export default function IdCard({ user }) {
  const { firstName, lastName, gender, height, birth, picture } = user;
  return (
    <div>
      <div>
        <img src={picture} alt="Avatar" />
      </div>
      <ul>
        <li>
          <strong>First name:</strong> {firstName}
        </li>
        <li>
          <strong>Last name:</strong> {lastName}
        </li>
        <li>
          <strong>Gender:</strong> {gender}
        </li>
        <li>
          <strong>Height:</strong> {height}
        </li>
        <li>
          <strong>Birth:</strong> {birth.toDateString()}
        </li>
      </ul>
    </div>
  );
}
