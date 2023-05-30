import "./Header.css";
const Header = (propiedades) => {
    return (
        <div className="Header">
            <h1>{propiedades.title}</h1>
            
        </div>
    );
};

export default Header;