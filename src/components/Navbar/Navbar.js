import { useContext } from "react"
import { DataContext } from "../Context/DataContext"
import { Link } from 'react-router-dom';

 import TotalItems from '../CartContent/TotalItems';

 import './Navbar.css';


const Navbar = () => {
  const {cart} = useContext(DataContext);
  return (
    <div className='nav-container'>
      <nav className='navbar'>

        <link to= {"/"}></link>
        <h1 className='navbar-logo'>Shop.</h1>
       
        <Link className='seecarrito' to={'/cart'}>
          🛒
         { cart.length > 0 ? <TotalItems /> : null} 
          </Link>
      </nav>
    </div>
  );
};

export default Navbar;
