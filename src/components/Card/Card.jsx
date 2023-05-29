import "./Card.css";

// Imagen


const Card = (propiedades) => {
    return (
        <div className="Card">
            <img src={propiedades.img} />
            <h1>{propiedades.title}</h1>
            <h2>{propiedades.subtitle}</h2>
            <p>{propiedades.text}</p>
        </div>
    );
};

export default Card;