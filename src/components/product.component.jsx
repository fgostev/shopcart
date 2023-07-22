import { useParams, useLocation } from 'react-router-dom'
import Nav from './nav.component';
import { useNavigate } from 'react-router-dom';
import "../styles/product.css"



const Product = ({cart, setCart}) => {
    const location = useLocation();
    const productObject = location.state; 
    const {id} = useParams(); 
    const navigate = useNavigate();



const addItemHandler = () => {
    let basket = [...cart];

    const existingItemIndex = basket.findIndex(item => item.name === productObject.name);

    if (existingItemIndex !== -1) {
        basket[existingItemIndex].amount += 1;
    } else {
        basket.push(productObject);
    }

    setCart(basket);
};

// const deleteHandler = (e) => {
//     const targetId = e.target.id;
//     const filteredBasket = cart.filter(item => item.id !== targetId)
//     setCart(filteredBasket);
// }

const goBackHandler = () => {
    navigate('/shop')
}

    return(
     <div className='productContainer'>
        <Nav cart = {cart} />
        <div className='product'>
            <img src={productObject.src} width="200px" alt={id} className='productImg'></img>
            <p className='productDescription'>  {id}   </p>
            <p className='productPrice'>{productObject.price}</p>
            <div className='btnContainer'>
            <button className='addItem' onClick={addItemHandler} name={id}>ADD TO CART</button>
            <button className='goBack' onClick={goBackHandler}> BACK </button>
            </div>
        </div>
     </div>
    )
}

export default Product;
