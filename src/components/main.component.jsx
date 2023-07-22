import { Link } from "react-router-dom";
import Nav from "./nav.component";
import "../styles/main.css"

function Main(){
    return(
        <div class="main">
        <h1 id="title">Barks and Tails</h1>
        {/* <Nav/> */}
        <Link to="/shop" id="shopMain"> Shop </Link>
        </div>
    )
}

export default Main;
