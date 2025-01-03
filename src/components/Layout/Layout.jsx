import { ButtonReg } from "../Button/ButtonReg.jsx";
import { Card } from "../Card/Card.jsx";
import { ClubNews } from "../ClubNews/ClubNews.jsx";
import { Footer } from "../Footer/Footer.jsx";
import { Info } from "../Info/Info.jsx";
import { Navigation } from "../Navigation/Navigation";
import { Rent } from "../Rent/Rent.jsx";
import { Reviews } from "../Reviews/Reviews.jsx";
import { Slider } from "../TestSlider/Slider.jsx";
import { TrenerInfo } from "../TrenerInfo/TrenerInfo.jsx";
import "./Layout.css"


export function Layout() {
    return (
        <div>
            <nav>
                <div className="back">
                    <div className="b-text">
                        <span className="b-text-tennis">ТЕННИСТНЫЙ</span><span className="b-text-club">клуб</span>
                        <p>Приглашаем на регулярные тренировки по теннису в Санкт-Петербрге в спортивном центре Лайф Сити.</p>
                        <ButtonReg />
                    </div>
                </div>
            </nav>
            <Navigation />


            <main>
                <div className="main-text">
                    НАШ <span className="main-high-text">ТЕННИСНЫЙ КЛУБ</span> ПРЕДЛАГАЕТ <br /> УСЛУГИ ВЫСОКОГО УРОВНЯ
                    <br /><span className="main-low-text">К вашим услугам в аренду закрытые профессиональные теннисные корты с покрытием хард,<br />
                        оснащенные климатическим оборудованием и вентиляцией.</span>
                </div>
                <ul className="card-list">
                    <li>
                    <Card
                        className="cards"
                        src='https://lifecitysport.by/wp-content/uploads/2023/12/service-04-365x450-1.jpg'
                        title='АРЕНДА КОРТА'
                        description='В центре Life City размещаются 3 корта размером 18х36 метров и 2 мини корта для обеспечения качественного учебно-тренировочного процесса в комфортных условиях.'
                        svgsrc='./cort.svg'
                    />
                    </li>
                    <li>
                    <Card
                        className="cards"
                        src='https://lifecitysport.by/wp-content/uploads/2023/12/service-01-365x450-1.jpg'
                        title='АРЕНДА ИНВЕНТАРЯ'
                        description='В спортивном комплексе Life City вы также можете взять в аренду ракетки, теннисные мячи.'
                        svgsrc='./rocket.svg'
                    />
                    </li>
                    <li>
                    <Card
                        className="cards"
                        src='https://lifecitysport.by/wp-content/uploads/2023/12/service-02-365x450-1.jpg'
                        title='ТРЕНЕР'
                        description='С помощью тренера вы сможете улучшить свои теннисные навыки, повысить физическую подготовленность и достичь новых спортивных высот.'
                        svgsrc='./balls-2.svg'
                    />
                    </li>
                    <li>
                    <Card
                    
                        className="cards"
                        src='https://lifecitysport.by/wp-content/uploads/2023/12/service-03-365x450-1.jpg'
                        title='ОБУЧЕНИЕ ДЕТЕЙ'
                        description='Программы обучения разработаны с учетом передового опыта работы и тенденций развития тенниса как вида спорта.'
                        svgsrc='./heat.svg'
                    />
                    </li>
                </ul>
                

                <div><Rent /></div>
                <div className="info"><Info /></div>
                <div className="content-space">
                    <div className="content-btn">
                        <ButtonReg  />
                    </div>
                </div>
                <div className="content-trener"><TrenerInfo /></div>
                <div className="reviews"><Reviews /></div>
                <div className="club-news"><ClubNews /></div>
                <div className="foot"><Footer /></div>
            </main>
        </div>
    )
}