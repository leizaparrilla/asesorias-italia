

import { Link, NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';

function NavBar() {
  return (

    <div className="container">
      <div className="row my-3">
        <div className="col text-rigth">

          <Link to={"/"}>
            <img src="../assets/logo.svg" alt="Via da Fuga" width={80} />
          </Link>
        </div>
      </div>

      

      <div className="row ">
        <div className="col"></div>
        <div className="col">
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <NavLink className="nav-link text-secondary" to={"/category/ciudadania.italiana"}>Ciudadania</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-secondary" to={"/category/Asesorias"}>Asesorias</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-secondary" to={"/category/Idioma"}>Idioma</NavLink>
            </li>
          </ul>
        </div>
        <div className="col text-end">
          <CartWidget />
        </div>
      </div>
    </div>
  );
}
export default NavBar;


