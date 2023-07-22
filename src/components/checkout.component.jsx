import Nav from "./nav.component";
import "../styles/checkout.css"


const Checkout = ({cart, setCart, count, setCount}) => {

const sumCount = () => {
    const items = [...cart];
    let total = 0;

    items.forEach(item => {
      total = ((parseFloat(item.price) * item.amount) + parseFloat(total)).toFixed(2)
    });
setCount(total);
    }
sumCount();

const deleteHandler = (e) => {
    const targetId = e.target.id;
    const filteredBasket = cart.filter(item => item.id !== targetId)
    setCart(filteredBasket);
}

const plusHandler = (e) => {
    const basket = [...cart];
    const itemId = e.target.id;
      basket.forEach((item) => {
        if(item.id===itemId){
          item.amount += 1;
        }
        return basket;
      })
  setCart(basket);
}

const minusHandler = (e) =>{
    const basket = [...cart];
    const itemId = e.target.id;
      basket.forEach((item) => {
        if(item.id===itemId && item.amount > 0){
          item.amount -= 1;
        }
        return basket;
      })
  setCart(basket);
}

    return (
      <div>
        <Nav cart = {cart}/>
        <div className="checkoutContainer">
      {
        cart.map((image) => {
        return(
          <div className="checkoutItem" key={image.id}>
          {console.log(image.amount)}
           <img src={image.src} className="checkoutImage" alt={image.alt} width="250px"/>
           <div className="checkoutInfo">
            <p className="name">{image.name}</p>
            <p className="price">{image.price}</p>
          <div className="addOrRemoveCon">
            <button className="minusBtn" id={image.id} onClick={minusHandler}>-</button>
            <span id="amountItems">{image.amount} </span>
            <button className="plusBtn" id={image.id} onClick={plusHandler}>+</button>
            </div>
          <button className="deleteBtn" id={image.id} onClick={deleteHandler}>delete</button>
          </div>
          </div>
        )
      })
      }
      </div>

      <div className="total">
        <h2>Total: {count}</h2>
      </div>

      </div>
    );
  };
  
  export default Checkout;
