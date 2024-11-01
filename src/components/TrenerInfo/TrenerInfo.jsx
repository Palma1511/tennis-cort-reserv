import { ButtonReg } from "../Button/ButtonReg";
import './TrenerInfo.css'
export function TrenerInfo() {
    return (
        <div className="content-trener">
            <div>
                <h1 className="head-info" style={{color: 'orangered', fontWeight: 800, marginBottom: '0'}}>ТРЕНЕРЫ</h1>
                <p style={{marginTop: '0'}}>Присоединяйтесь к любителям тенниса и наслаждайтесь игрой на наших ухоженных кортах. <br />Свяжитесь с нами, чтобы узнать больше о доступности и ценах на аренду кортов. До встречи на корте!</p>
            </div>
            <div className="treners">
                <div className="trener-info trener-one">
                    <img className="treners-img" src="https://lifecitysport.by/wp-content/uploads/2023/12/img_6320-1.jpg" />
                    <h1 className="trener-name">ЕВГЕНИЯ НОВИКОВА</h1>
                    <ul>
                        <li>
                            <img className="svgs" src="./rent.svg"/><span>Училище олимпийского резерва</span>
                        </li>
                        <li>
                            <img className="svgs" src="./rent.svg"/><span>Высшее образование БГУФК</span>
                        </li>
                        <li>
                            <img className="svgs" src="./rent.svg"/><span>Участник курсов ITF National Level 1 Course</span>
                        </li>
                        <li>
                            <img className="svgs" src="./rent.svg"/><span>КМС</span>
                        </li>
                        <li>
                            <img className="svgs" src="./rent.svg"/><span>Тренерский стаж: более 5 лет</span>
                        </li>
                    </ul>
                    <ButtonReg />
                </div>

                <div className="trener-info trener-one">
                    <img className="treners-img" src="https://lifecitysport.by/wp-content/uploads/2023/12/izobrazhenie_viber_2023-12-19_17-25-16-402-900x1024.jpg" />
                    <h1 className="trener-name">НИНА ИСМАЙЫЛОВА</h1>
                    <ul>
                        <li>
                            <img className="svgs" src="./rent.svg"/><span>Мастер спорта Республики Беларусь по теннису</span>
                        </li>
                        <li>
                            <img className="svgs" src="./rent.svg"/><span>2005 Белорусский государственный университет физической культуры</span>
                        </li>
                        <li>
                            <img className="svgs" src="./rent.svg"/><span>1994-1999 член сборной команды Республики Беларусь</span>
                        </li>
                        <li>
                            <img className="svgs" src="./rent.svg"/><span>Победитель и призер чемпионатов Республики Беларусь, международных турниров в одиночном и парном разрядах</span>
                        </li>
                        <li>
                            <img className="svgs" src="./rent.svg"/><span>Участница личных и командных чемпионатов Европы</span>
                        </li>
                        <li>
                            <img className="svgs" src="./rent.svg"/><span>Опыт работы с начинающими и юниорами до 12 и 14 лет более 10 лет</span>
                        </li>
                    </ul>
                    <ButtonReg />
                </div>
            </div>
        </div>
        
    )
}