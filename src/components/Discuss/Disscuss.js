import React from 'react';
import Card from '../Card/Card';

export default function Discuss() {
  return (
    <div className="discuss">
      <h1>Diskusi Tersedia</h1>
      <div className="cards-container">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
