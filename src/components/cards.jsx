const Card = ({ title , description}) => {
    return (
        <section className="card-item">
            <h2>{title}</h2>
            <p>{description}</p>
        </section>
    )
}

export default Card;
