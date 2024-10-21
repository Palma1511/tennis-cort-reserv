export function Card({ src, title, description, alt }) {
    return (
        <div className="card">
            <img src={src} alt={alt} />
            <h2>{title}</h2>
            <h3>{description}</h3>
        </div>
    )
}