import React from 'react';
import s from './SingleCard.module.css';

export const Card = ({ card, handleChoice, flipped, disabled }) => {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <div className={s.card}>
      <div className={flipped ? s.flipped : ''}>
        <img className={s.front} src={card.src} alt="card front" />
        <img className={s.back} src="/img/cover.png" alt="card back" onClick={handleClick} />
      </div>
    </div>
  );
};
