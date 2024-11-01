import './ClubNews.css'
import { SocialModal } from '../SocialModal/SocialModal'

export function ClubNews() {
    return (
        <div className='content-club-news'>
            <div className='club-news-text'>
                <h1 className='club-b-text'>
                    КЛУБНЫЕ <span>НОВОСТИ</span>
                </h1>
                <p>Самые актуальные новости и интересные заметки.</p>
            </div>
            <div className='club-news-card'>
                <ul>
                    <li>
                        <div className='data'>
                            <span style={{fontWeight: '900', fontSize: '24px'}}>16</span> <span style={{fontSize: '12px'}}>ДЕК</span>
                        </div>
                        <img className='fav-img' src="https://lifecitysport.by/wp-content/uploads/2023/12/yellow-ball-is-laying-blue-tennis-court-carpet-blurred-green-plantings-trees-1024x512.jpg" />
                        
                        <div className='text-news'>
                            <p>Новости</p>
                        </div>
                        <h1 className='card-fav-text'>
                            Сквош — игровой вид спорта с ракеткой и мячом
                        </h1>
                        <p className='club-user-info'>
                            <span className='user-click'>От </span> 
                            <img className='avatar-img' src="https://secure.gravatar.com/avatar/3903f3ce049cac132fa3825b56445753?s=32&d=mm&r=g"/>
                            <span className='user-click username'> UserName </span>
                            <img className='com-img' src="./comment.svg" />
                            <span className='social-modal'>
                                <span> </span>
                                <SocialModal />
                            </span>
                            <p className='club-card-info'>
                                В нашей стране сквош — достаточно новая и неизвестная игра, хотя в европейских странах она пользуется большой популярностью. В сквош и...
                            </p>
                            <p className='cont-read'>ПРОДОЛЖИТЬ ЧТЕНИЕ <span className='first-dot'>.</span><span className='second-dot'>.</span><span className='third-dot'>.</span></p>
                        </p>
                    </li>
                    <li>
                        <div className='data'>
                            <span style={{fontWeight: '900', fontSize: '24px'}}>14</span> <span style={{fontSize: '12px'}}>МАЙ</span>
                        </div>
                        <img className='fav-img' src="https://lifecitysport.by/wp-content/uploads/2023/12/tennis-couple-holding-tennis-rackets-1024x512.jpg" />
                        <div className='text-news'>
                            <p>Новости</p>
                        </div>
                        <h1 className='card-fav-text'>
                            Сквош — игровой вид спорта с ракеткой и мячом
                        </h1>
                        <p className='club-user-info'>
                            <span className='user-click'>От </span> 
                            <img className='avatar-img' src="https://secure.gravatar.com/avatar/3903f3ce049cac132fa3825b56445753?s=32&d=mm&r=g"/>
                            <span className='user-click username'> UserName </span>
                            <img className='com-img' src="./comment.svg" />
                            <span className='social-modal'>
                                <span> </span>
                                <SocialModal />
                            </span>
                            
                            <p className='club-card-info'>
                                В нашей стране сквош — достаточно новая и неизвестная игра, хотя в европейских странах она пользуется большой популярностью. В сквош и...
                            </p>
                            <p className='cont-read'>ПРОДОЛЖИТЬ ЧТЕНИЕ <span className='first-dot'>.</span><span className='second-dot'>.</span><span className='third-dot'>.</span></p>
                        </p>
                    </li>
                    <li>
                        <div className='data'>
                            <span style={{fontWeight: '900', fontSize: '24px'}}>16</span> <span style={{fontSize: '12px'}}>АПР</span>
                        </div>
                        <img className='fav-img' src="https://lifecitysport.by/wp-content/uploads/2023/12/img_6139-min-1-1024x512.jpg" />
                        <div className='text-news'>
                            <p>Новости</p>
                        </div>
                        <h1 className='card-fav-text'>
                            Сквош — игровой вид спорта с ракеткой и мячом
                        </h1>
                        <p className='club-user-info'>
                            <span className='user-click'>От </span> 
                            <img className='avatar-img' src="https://secure.gravatar.com/avatar/3903f3ce049cac132fa3825b56445753?s=32&d=mm&r=g"/>
                            <span className='user-click username'> UserName </span>
                            <img className='com-img' src="./comment.svg" />
                            <span className='social-modal'>
                                <span> </span>
                                <SocialModal />
                            </span>
                            <p className='club-card-info'>
                                В нашей стране сквош — достаточно новая и неизвестная игра, хотя в европейских странах она пользуется большой популярностью. В сквош и...
                            </p>
                            <p className='cont-read'>ПРОДОЛЖИТЬ ЧТЕНИЕ <span className='first-dot'>.</span><span className='second-dot'>.</span><span className='third-dot'>.</span></p>
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    )
}