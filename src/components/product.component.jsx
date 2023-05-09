import { useParams, useLocation } from 'react-router-dom'
import Nav from './nav.component';

const Product = () => {
    const location = useLocation();
    const productObject = location.state; 
    const {id} = useParams(); 

    return(
     <div className='product'>
     <Nav />
     product {id}
     <img src={productObject.src} width="200px"></img>
     </div>
    )
}

export default Product;
