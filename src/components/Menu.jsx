import { Link } from "react-router-dom";
import './menu.css'
import CartWidget from './components/CartWidget/CartWidget';
import LogoGral from './components/CartWidget/LogoGral';




 
const Menu = () => {
  
  return (
    <nav>
      <div className="menu">
        <ul>
          <LogoGral /> 
          <li> <Link to="/"> Inicio </Link></li>
          <li>  <Link to="/Ciudadania">Ciudadania Italiana</Link></li>
          <li> <Link to="/Asesorias"> Asesorias</Link></li>
          <li> <Link to="/Idiomas">Idiomas </Link></li>
          <li> <Link to="/Contacto">Contacto</Link></li>
          <li><CartWidget /></li>
        </ul>
      </div>
    </nav>
  )
}

export default Menu;