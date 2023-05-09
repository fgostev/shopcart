import { Link } from "react-router-dom";
import Nav from "./nav.component";

function Main(){
    return(
        <div className="main">
        <Nav/>
        <Link to="/shop"> Shop </Link>
        </div>
    )
}

export default Main;
