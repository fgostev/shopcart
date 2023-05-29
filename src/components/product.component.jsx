import { useParams, useLocation } from 'react-router-dom'
import Nav from './nav.component';
import { useNavigate } from 'react-router-dom';
import { useState } from "react";



const Product = ({cart, setCart}) => {
    const location = useLocation();
    const productObject = location.state; 
    const {id} = useParams(); 

    const navigate = useNavigate();

// const addItemToTheCart = (item) =>{
//     setCart(prevCart => [...prevCart, item])
// }

const addItemHandler = () => {
    setCart(prevCart => [...prevCart, productObject]);
    console.log(cart);
}

const goBackHandler = () => {
    navigate('/shop')
}

    return(
     <div className='productContainer'>
        <Nav />
        <div className='product'>
            product {id}
            <img src={productObject.src} width="200px"></img>
            <button className='addItem' onClick={addItemHandler}>add</button>
            <button className='goBack' onClick={goBackHandler}>back shop</button>
        </div>
     </div>
    )
}

export default Product;
