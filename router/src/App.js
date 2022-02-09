
import './App.css';
import { Routes, Route} from "react-router-dom";
import {  useState, useEffect } from 'react';
import { ProductListItem } from './components/Product/ProductListItem';
import {ProductDetail} from './components/Product/ProductDetail';

import { Login } from './components/login';

function App() {
  let [instance, setInstance] = useState([]);
 useEffect(() => {
  fetch('http://127.0.0.1:8000/product/')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setInstance(data)
    });
  }, []);

const [slug, setSlug] = useState('')


let  setslug  = (slug) => {
       setSlug(slug)
}

const [product, setProduct] = useState([])

let getProduct = (product) => {
  setProduct(product)
}





  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<ProductListItem props={instance} setslug={setslug} getProduct={getProduct}/>}/>
        <Route path={`product/${slug}`} element={<ProductDetail props={product}/>}/>
        <Route path='login' element={<Login/>}/>
        

      </Routes>
    </div>
  );
}

export default App;
