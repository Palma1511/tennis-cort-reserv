import './Info.css'

export function Info() {
    return (
        <div className='elements'>
            <div className='b-info-text'>
                    <h1>ЛУЧШИЙ <span>ТЕННИС</span> ДЛЯ ВАС</h1>
                    <p>Внутри комплекса к вашему распоряжению индивидуальные шкафчики для хранения вещей,<br /> душевые кабины и кафе на первом этаже, где можно подкрепиться после тренировки.</p>
            </div>
            <div className='contents'>
                <div className="element element-left">
                    <div className="infos e-l-top">
                        <img src="./cort-2.svg" className="e-img"/>
                        <span>
                            5 КОРТОВ ДЛЯ ИГР
                            <p>Пропускная способность спортивного сооружения позволяет одновременно осуществлять подготовку значительному количеству игроков.</p>
                        </span>
                        
                    </div>
                    <div className="infos e-l-bottom">
                        <img src="./trener.svg" className="e-img"/>
                        <span>
                            ТРЕНЕРЫ
                            <p>У нас все тренеры с профессиональным образованием, опытом работы и систематически повышающие свою квалификацию.</p>
                        </span>
                        
                    </div>
                </div>
                <div className="element-center">
                    <img src="https://lifecitysport.by/wp-content/uploads/2023/12/icons-center.jpg" alt="" />
                </div>
                <div className="element element-right">
                <div className="infos e-r-top">
                        <img src="./balls.svg" className="e-img"/>
                        <span>
                            ГРУППОВЫЕ ЗАНЯТИЯ
                            <p>Присоединяйтесь к нашим групповым занятиям по теннису и наслаждайтесь игрой в уютной атмосфере вместе с другими энтузиастами тенниса.</p>
                        </span>
                        
                    </div>
                    <div className="infos e-r-bottom">
                        <img src="./clock.svg" className="e-img"/>
                        <span>
                            ГИБКИЙ ГРАФИК
                            <p>Наш теннисный клуб предлагает гибкий график для занятий, который соответствует вашему образу жизни.</p>
                        </span>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}