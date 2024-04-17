import './menu.css'
import CartWidget from './components/CartWidget/CartWidget';
import LogoGral from './components/CartWidget/LogoGral';


const Menu = () => {
    return (
        <nav>
          <div className="menu">  
           <ul>
          <LogoGral/> 
          <li> <a href="#">Inicio</a></li>
          <li> <a href="#">Ciudadania Italiana</a></li>
          <li> <a href="#">Asesorias</a></li>
          <li> <a href="#">Contacto</a></li>
          <li><CartWidget/></li>
          
          
        
          </ul>
          
          </div>
          
        </nav>
    )
}

export default Menu;