import "./Card.css"

export function Card({ src, title, description, alt, svgsrc }) {
    return (
        <div className="card">
            <img className="card-img" src={src} alt={alt} />
        
            <div className="back-img">
                <img className="card-mini-img" src={svgsrc}/>
            </div>
            
            
            <h2 className="card-title">{title}</h2>
            <p className="card-description">{description}</p>
        </div>
    )
}