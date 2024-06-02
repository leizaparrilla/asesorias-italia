import { Link, NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';

function NavBar() {
  return (

    <div className="container">
      <div className="row my-3">
        <div className="col text-center">

          <Link to={"/"}>
            <img src="/src/assets/logovdf.png" alt="Via da Fuga" width={200} />
          </Link>
        </div>
      </div>

      

      <div className="row ">
        <div className="col"></div>
        <div className="col">
          <ul className="nav justify-content-flex-center">

          
            <li className="nav-item">
              <NavLink className="nav-link text-light" to={"/category/ciudadania.italiana"}>Ciudadania Italiana</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-light " to={"/category/Asesorias"}>Asesorias</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-light "  to={"/category/Idioma"}>Idioma</NavLink>
              
            </li>
          </ul>
        </div>
        <div className="col text-end">
          <CartWidget />
        </div>
        <div className="texto">
                <h1 className="fs-3 text-center mt-5 style width={100}">Todo lo que necesitas saber sobre ciudadania italiana</h1>
            </div>
      </div>
    </div>
    
  );
}

 
export default NavBar;


