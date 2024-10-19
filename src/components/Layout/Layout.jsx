import { Navigation } from "../Navigation/Navigation";
import "./Layout.css"
export function Layout() {
    return (
        <div>
            <nav>
                <div className="back">
                    <div className="b-text">
                        ТЕННИСТНЫЙ<span className="b-text-club">клуб</span>
                        <p>Приглашаем на регулярные тренировки по теннису в Минске в спортивном центре Лайф Сити.</p>
                        <button className="element-button"><span className="element-button-text">Записаться онлайн</span></button>
                    </div>
                </div>
            </nav>
            <Navigation />


            <main>
                <div className="content">Содержимое страницы...</div>
                <div className="content">Содержимое страницы...</div>
                <div className="content">Содержимое страницы...</div>
                <div className="content">Содержимое страницы...</div>
                <div className="content">Содержимое страницы...</div>
                <div className="content">Содержимое страницы...</div>
            </main>
        </div>
    )
}