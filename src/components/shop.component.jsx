import { useState } from "react";
import Images from "./images.component";
import { Link, useLocation} from "react-router-dom";


const Shop = () => {

const location = useLocation()
{console.log(location)}

const [items, setItems] = useState([]);
const [images, setImages] = useState(Images);

  return (
    <div className="App">

    {
      images.map((image) => {
        return(
          <div>
          {/* <a href={image.name}><img src={image.src} alt={image.alt} width="250px"/></a>  */}
          <Link to={image.name} state={image} className="link"> <img src={image.src} alt={image.alt} width="250px"/>
          </Link>
            <p className="name">{image.name}</p>
            <p className="price">{image.price}</p>
          </div>
        )
      })
    }

    </div>
  );
  };
  
  export default Shop;
