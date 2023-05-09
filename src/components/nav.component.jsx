import { Link } from "react-router-dom";

const Nav = () =>{
    return(
        <div id="nav">
        <Link to="/shop" id="shop">shop</Link>
        <Link to="/checkout" id="checkout">checkout</Link>
        </div>
    )
}

export default Nav;
