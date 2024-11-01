import React, { useState } from 'react';
import './Slider.css';  // Стили будут подключены

const items = [
  { id: 1, content: "Лучшее место для игры в теннис и сквош! Я постоянно арендую корты здесь и всегда остаюсь доволен. Чистота, порядок, отличное обслуживание.", name: 'Сергей' },
  { id: 2, content: "Спортивный центр Лайф Сити - настоящая находка для любителей сквоша и тенниса. Удобное расположение, хорошие корты, доступные цены. Рекомендую!", name: 'Николай' },
  { id: 3, content: "Великолепный спортивный центр с отличными кортами для сквоша и тенниса. Приятная атмосфера, вежливый персонал, все устроено для комфортной игры. Обязательно приду еще!", name: 'Ольга' },
  { id: 4, content: "Лучшее место для игры в сквош и теннис! Чистота, порядок, отличное обслуживание. Вернусь сюда снова и снова!", name: 'Андрей' },
  { id: 5, content: "Спортивный центр Лайф Сити - место, где можно насладиться игрой в сквош и теннис в уютной атмосфере. Корты в отличном состоянии, персонал приветливый. Очень довольна!", name: 'Светлана' },
  { id: 6, content: "Спортивный центр Лайф Сити - место, где можно насладиться игрой в сквош и теннис в уютной атмосфере. Корты в отличном состоянии, персонал приветливый. Очень довольна!", name: 'Светлана' }
];

export function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerSlide = 3; // Количество элементов на одном слайде
  const [isHovered, setIsHovereed] = useState(false)
  const nextSlide = () => {
    // Переход на следующий слайд
    setCurrentIndex((prevIndex) => 
      prevIndex + itemsPerSlide >= items.length ? 0 : prevIndex + itemsPerSlide
    );
  };

  const prevSlide = () => {
    // Переход на предыдущий слайд
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? items.length - itemsPerSlide : prevIndex - itemsPerSlide
    );
  };

  return (
    <div className="slider-container" 
            onMouseEnter={() => setIsHovereed(true)}
            onMouseLeave={() => setIsHovereed(false)}
    >
      {isHovered ? <button className="slider-button prev vis" onClick={prevSlide}>
        &#10094;
      </button> : <button className="slider-button prev novis" onClick={prevSlide}>
        &#10094;
      </button>}
      <div className="slider-wrapper">
        <div className="slider" style={{ transform: `translateX(-${currentIndex * (100 / itemsPerSlide)}%)` }}>
          {items.map((item) => (
            <div className="slider-item" key={item.id}>
                <div className='stars'>
                    <img src="./star.png" />
                    <img src="./star.png" />
                    <img src="./star.png" />
                    <img src="./star.png" />
                    <img src="./star.png" />
                </div>
              <p>{item.content}</p>
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
      {isHovered ? <button className="slider-button next vis" onClick={prevSlide}>
        &#10095;
      </button> : <button className="slider-button next novis" onClick={prevSlide}>
        &#10095;
      </button> }
      
    </div>
  );
};
