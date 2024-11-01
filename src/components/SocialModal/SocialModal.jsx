import React, { useRef, useState } from 'react';
import './SocialModal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook';
import { faPinterest } from '@fortawesome/free-brands-svg-icons/faPinterest';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faTelegram } from '@fortawesome/free-brands-svg-icons/faTelegram';
import { faShareNodes } from '@fortawesome/free-solid-svg-icons';

export function SocialModal() {
    const [isVisible, setIsVisible] = useState(false);
    const timeoutRef = useRef(null);

    // Показать модальное окно
    const showTooltip = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setIsVisible(true);
    };

    // Скрыть модальное окно с задержкой
    const hideTooltip = () => {
        timeoutRef.current = setTimeout(() => {
            setIsVisible(false);
        }, 200); // Устанавливаем небольшую задержку
    };

return (
        <div 
            className="tooltip-container"
            onMouseEnter={showTooltip}
            onMouseLeave={hideTooltip}
        >
            {/* <button className="tooltip-trigger">
                Поделиться
            </button> */}

            <FontAwesomeIcon className="tooltip-trigger" icon={faShareNodes} />
            {isVisible && (
            <div className="tooltip-modal">
                <div className="tooltip-arrow"></div>
                    <div className="social-icons">
                                <FontAwesomeIcon className='awesome-icon' icon={faFacebook} />
                                <FontAwesomeIcon className='awesome-icon' icon={faTwitter} />
                                <FontAwesomeIcon className='awesome-icon' icon={faPinterest} />
                                <FontAwesomeIcon className='awesome-icon' icon={faLinkedinIn} />
                                <FontAwesomeIcon className='awesome-icon' icon={faTelegram} />
                    </div>
            </div>
            )}
        </div>
    );
//     const [isVisible, setIsVisible] = useState(false);

//   // Показать модальное окно при наведении
//   const showTooltip = () => setIsVisible(true);

//   // Скрыть модальное окно при убирании курсора
//   const hideTooltip = () => setIsVisible(false);

//   return (
//     <div className="tooltip-container" onMouseLeave={hideTooltip}>
//       <button onMouseEnter={showTooltip} className="tooltip-trigger">
//         Поделиться
//       </button>
//       {isVisible && (
//         <div className="tooltip-modal" onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>
//           <div className="tooltip-arrow"></div>
//             <div className="social-icons">
                
//             </div>
//         </div>
//       )}
//     </div>
//   );
// const [visible, setVisible] = useState(false);

// return (
//   <div 
//     className="tooltip-container" 
//     onMouseEnter={() => setVisible(true)} 
//     onMouseLeave={() => setVisible(false)}
//   >
//     <button className="tooltip-button">Share</button>
    
//     {visible && (
//       <div className="tooltip">
//         <div className="tooltip-arrow"></div>
//         <div className="social-icons">
            
//         </div>
//       </div>
//     )}
//   </div>
//   );
};


