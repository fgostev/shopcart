import { useParams, useLocation } from 'react-router-dom'


const Product = () => {
    const location = useLocation();
    const productObject = location.state; 
    const {id} = useParams(); 

    return(
     <div>product {id}
     <img src={productObject.src} width="200px"></img>
     </div>
    )
}

export default Product;
