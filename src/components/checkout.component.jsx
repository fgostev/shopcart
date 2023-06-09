import Nav from "./nav.component";

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

// const deleteHandler = (e) => {
//   const targetId = e.target.id;
//   let basket = [...cart];

//   basket.forEach((item, index) => {
//     if(item.id === targetId){
//       basket.splice(index, 1);
//     }    
//   })
//   setCart(basket);
// }

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
        <h1>Checkout</h1>
        <Nav />
      {
        cart.map((image) => {
        return(
          <div>
          {console.log(image.amount)}
          <button className="deleteBtn" id={image.id} onClick={deleteHandler}>delete</button>
           <img src={image.src} alt={image.alt} width="250px"/>
            <p className="name">{image.name}</p>
            <p className="price">{image.price}</p>
          <div className="addOrRemoveCon">
            <button className="minusBtn" id={image.id} onClick={minusHandler}>-</button>
            <span>{image.amount} </span>
            <button className="plusBtn" id={image.id} onClick={plusHandler}>+</button>
          </div>
          </div>
        )
      })
      }
      <h2>Total: {count}</h2>
      </div>
    );
  };
  
  export default Checkout;
