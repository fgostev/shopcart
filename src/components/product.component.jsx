import { useParams, useLocation } from 'react-router-dom'
import Nav from './nav.component';
import { useNavigate } from 'react-router-dom';



const Product = ({cart, setCart}) => {
    const location = useLocation();
    const productObject = location.state; 
    const {id} = useParams(); 
    const navigate = useNavigate();



// check the bug of adding the item once again ater a while

// const addItemHandler = () => {
//     let basket = [...cart];

//     if(!basket.includes(productObject)){
//         basket.push(productObject);
//     }else{
//         productObject.amount += 1;
// }
// // console.log(productObject.name);
//         setCart(basket);
// }

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
        <Nav />
        <div className='product'>
            <p>  product {id}   </p>
            <img src={productObject.src} width="200px" alt={id}></img>
            <button className='addItem' onClick={addItemHandler} name={id}>add</button>
            <button className='goBack' onClick={goBackHandler}>back shop</button>
        </div>
     </div>
    )
}

export default Product;
