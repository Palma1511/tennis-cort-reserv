import React from 'react';
import './Rent.css';

export function Rent() {
  return (
    <div className="rent-card">
      <div className="rent-card-top">
        <div className='first-img' />
        <div className="price-info">
          <h2><span className='prices'>СТОИМОСТЬ</span> <span className="highlight">АРЕНДЫ</span></h2>
          <h3>ТЕННИСНЫЙ КОРТ:</h3>
          <ul>
            <li><img src="./rent-2.svg"/>Пн.–Пт.: 7.00–16.00 — <strong>55 BYN</strong></li>
            <li><img src="./rent-2.svg"/>Пн.–Пт.: 16.00–22.30 — <strong>65 BYN</strong></li>
            <li><img src="./rent-2.svg"/>Сб.–Вс.: 8.00–22.30 — <strong>60 BYN</strong></li>
          </ul>
          <h3>МИНИ КОРТ:</h3>
          <ul>
            <li><img src="./rent-2.svg"/>Пн.–Пт.: 7.00–16.00 — <strong>30 BYN</strong></li>
            <li><img src="./rent-2.svg"/>Пн.–Пт.: 16.00–22.30 — <strong>35 BYN</strong></li>
            <li><img src="./rent-2.svg"/>Сб.–Вс.: 8.00–22.30 — <strong>30 BYN</strong></li>
          </ul>
          <h3>АРЕНДА ИНВЕНТАРЯ:</h3>
          <ul>
            <li><img src="./rent-2.svg"/>Аренда ракетки для тенниса — <strong>5 BYN</strong></li>
          </ul>
        </div>
      </div>
      <div className="rent-card-bottom">
        <div className='second-img' />
        <div className='third-img' />
      </div>
    </div>
  );
};
