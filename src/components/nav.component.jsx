import { Link } from "react-router-dom";
import "../styles/nav.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketShopping, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';


const Nav = ({cart}) =>{
    return(
        <div id="nav">
        <p id="titleNav">Barks and Tails</p>
        <Link to="/shop" id="shop">shop</Link>
        <Link to="/checkout" id="checkout"> <FontAwesomeIcon icon={faShoppingBasket} /> <span id="basketCount">{cart.length}</span></Link>
        </div>
    )
}

export default Nav;
