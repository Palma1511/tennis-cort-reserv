import { Slider } from "../TestSlider/Slider";
import './Reviews.css'
export function Reviews() {
    return (
        <div className="rev-content">
            <div className="rev-b-text">
                <h1>ЧТО <span>О НАС</span> ГОВОРЯТ</h1>
                <p>Мы выбрали несколько отзывов с гугл карт. Это только малая доля наших довольных клиентов. <br />Приходите и вы чтобы насладиться игрой в<b> теннис </b>или <b>сквош </b></p>
            </div>

            <div className="rev-slider">
                <Slider />
            </div>

            <div>
                <div
                    className="hover-area"
                    onMouseEnter={() => setIsHovereed(true)}
                    onMouseLeave={() => setIsHovereed(false)}
                >
                <button className="element-button">
                    <span className="element-button-text">Читать все отзывы</span>
                </button>
                </div>
            </div>
        </div>
    )
}