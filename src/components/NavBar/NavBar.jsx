import "./NavBar.css"
import CardWidget from "../CardWidget/CardWidget";
import img from '../../assets/img/LOGO1.svg';



const NavBar = () => {
    return(
        <nav>
            <ul>
                <li>
                    <a href="#"><img src={img} alt="brand" /></a>
                </li>    
                <li>
                    <a href="#">Inicio</a>
                </li>
                <li>
                    <a href="#">Mates</a>
                </li>
                <li>
                    <a href="#">Canastos</a>
                </li>
                <li>
                    <a href="#">Bombillas</a>
                </li>
                <li>
                    <a href="#">Contacto</a>
                </li>
                <li>
                    <CardWidget />
                </li>
            </ul>
        </nav>
        
    );
};

export default NavBar
