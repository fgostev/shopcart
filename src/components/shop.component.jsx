import { useState } from "react";
import Images from "./images.component";
import { Link, useLocation} from "react-router-dom";
import Nav from "./nav.component";
import "../styles/shop.css"

const Shop = ({cart}) => {

const location = useLocation()
{console.log(location)}

const [images, setImages] = useState(Images);


  return (
    <div className="Shop">
    <Nav cart = {cart}/>
    <div className="catalogue ">
    {
      images.map((image) => {
        return(
          <div key={image.id}>
          {/* <a href={image.name}><img src={image.src} alt={image.alt} width="250px"/></a>  */}
          <Link to={image.name} state={image} className="link"> <img src={image.src} alt={image.alt} width="200px"/>
          </Link>
            <p className="name">{image.name}</p>
            <p className="price">{image.price}</p>
          </div>
        )
      })
    }
    </div>

    </div>
  );
  };
  
  export default Shop;
