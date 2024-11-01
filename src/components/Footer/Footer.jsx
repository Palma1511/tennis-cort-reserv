import { faInstagram, faTelegram } from "@fortawesome/free-brands-svg-icons";
import { faViber } from "@fortawesome/free-brands-svg-icons/faViber";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Footer.css'
import { ButtonReg } from "../Button/ButtonReg";

export function Footer() {
    return (
        <div className="content-footer">
            <div className="container-footer-first">

                <div className="contacts-footer">
                    <img src="./logo.png" className="logo-img" />
                    <p>Приглашаем на регулярные тренировки по теннису в Минске в спортивном<br /> центре Лайф Сити</p>
                    <FontAwesomeIcon icon={faPhone} style={{color: 'rgba(255, 99, 71)', width: '20px'}}/> <span>+7 (900) 777-77-77</span><br />
                    <FontAwesomeIcon icon={faEnvelope} style={{color: 'rgba(255, 99, 71)', width: '20px'}}/> <span>test@mail.ru</span>
                    <div className="soc-link">
                        <div className="viber-link">
                            <FontAwesomeIcon className="viber" icon={faViber} />
                        </div>
                        <div className="tel-link">
                            <FontAwesomeIcon className="tel" icon={faTelegram} />
                        </div>
                        <div className="inst-link">
                            <FontAwesomeIcon className="inst" icon={faInstagram} />
                        </div>
                    </div>
                </div>

                <div className="menu-web">
                    <h1>Меню сайта</h1>
                    <div className="line" />
                    <div className="menu-block">
                        <div className="first-block">
                            <p><img className="foot-svgs" src="./rent.svg"/><span>Теннис</span></p>
                            <p><img className="foot-svgs" src="./rent.svg"/><span>Сквош</span></p>
                            <p><img className="foot-svgs" src="./rent.svg"/><span>Тренеры</span></p>
                        </div>
                        <div className="second-block">
                            <p><img className="foot-svgs" src="./rent.svg"/><span>О нас</span></p>
                            <p><img className="foot-svgs" src="./rent.svg"/><span>Новости</span></p>
                            <p><img className="foot-svgs" src="./rent.svg"/><span>Контакты</span></p>
                        </div>
                        <div className="menu-btn">
                            <ButtonReg />
                        </div>
                        
                    </div>
                </div>
                <div className="last-photo">
                    <h1>Последние фото</h1>
                    <div className="line photo" />

                    <div className="last-photo-img">
                        <img src="https://lifecitysport.by/wp-content/uploads/2023/12/img_6474-min.jpg" />
                        <img src="https://lifecitysport.by/wp-content/uploads/2023/12/img_6451-min.jpg" />
                        <img src="https://lifecitysport.by/wp-content/uploads/2023/12/img_6320.jpg" />
                        <img src="https://lifecitysport.by/wp-content/uploads/2023/12/img_6282-min.jpg" />
                        <img src="https://lifecitysport.by/wp-content/uploads/2023/12/img_6314.jpg" />
                        <img src="https://lifecitysport.by/wp-content/uploads/2023/12/img_6048.jpg" />
                    </div>
                </div>
            </div>
            <div className="container-footer-second">
                <div className="last-line" />
                <div className="bottom-footer">                    
                    <div className="shield">
                        <p><span style={{color: 'orangered'}}>lifecitysport.by</span> © Все права защищены</p>
                    </div>
                    <div className="develop">
                        <span>Разработано </span><img src="https://lifecitysport.by/wp-content/uploads/2023/12/vneteshop_2.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}


// 