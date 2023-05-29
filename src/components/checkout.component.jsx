import Nav from "./nav.component";

const Checkout = ({cart}) => {

    return (
      <div>
        <h1>Checkout</h1>

      {
        cart.map((image) => {
        return(
          <div>
          <Nav />
          {/* <a href={image.name}><img src={image.src} alt={image.alt} width="250px"/></a>  */}
           <img src={image.src} alt={image.alt} width="250px"/>
            <p className="name">{image.name}</p>
            <p className="price">{image.price}</p>
          </div>
        )
      })
      }

      </div>
    );
  };
  
  export default Checkout;
