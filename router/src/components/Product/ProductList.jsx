import './card.css'
import { Link } from 'react-router-dom';





export const ProductList = ({props, setslug, getProduct}) => {
 
  


  return <div className='list'>
      <div className="product-item">
  <img className='image' src={props.image[0].image}/>
  <div className="product-list">
    <h3>{props.title}</h3>
      <span className="price">{`${Number(props.price[0].new_price) || Number(props.price[0].price)} грн.`}</span>
      {Number(props.price[0].discount) ? 
      <p><font color='red'>{`Скидка ${props.price[0].discount} %`}</font></p> : <></>}
      {Number(props.price[0].discount) ? <s>{`${props.price[0].price} грн.`}</s> : <></>}
      <br></br>

      <Link onClick={ () => {getProduct(props); setslug(props.slug)}} className='button' to={`product/${props.slug}`}>Подробнее</Link>
      <br/>

  </div>
</div>
</div>;
};
