import {useState, useEffect} from 'react';

function App() {

const [items, setItems] = useState([]);

useEffect(() => {
  fetch(`https://fakestoreapi.com/products/category/men's%20clothing`)
  .then(response => response.json())
  .then(data => setItems(data))
},[])


  return (

    <div className="App">
    {items.map((item) => <img src = {item.image} alt={item.description} width="200px"></img>)}
    </div>
  );
}

export default App;
