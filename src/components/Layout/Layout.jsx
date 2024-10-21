import { ButtonReg } from "../Button/ButtonReg.jsx";
import { Card } from "../Card/Card.jsx";
import { Navigation } from "../Navigation/Navigation";
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
                <Card
                    src='https://lifecitysport.by/wp-content/uploads/2023/12/service-04-365x450-1.jpg'
                    title='АРЕНДА КОРТА'
                    description='В центре Life City размещаются 3 корта размером 18х36 метров и 2 мини корта для обеспечения качественного учебно-тренировочного процесса в комфортных условиях.'
                />
                <div className="content">Содержимое страницы...</div>
                <div className="content">Содержимое страницы...</div>
                <div className="content">Содержимое страницы...</div>
                <div className="content">Содержимое страницы...</div>
                <div className="content">Содержимое страницы...</div>
            </main>
        </div>
    )
}