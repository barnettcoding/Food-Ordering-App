import React, {useContext} from 'react'
import classes from './MenuItems.module.css'
import QtyForm from './QtyForm';
import CartContext from '../../store/cart-context';


const MenuItems = props => {
 
    const CartContexx = useContext(CartContext)
    // const price = `$${props.price.toFixed(2)}`;
    const addToCartHandler = amount => {
        CartContexx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        })

    };
  return (
      <li className={classes.meal}>
          <div>
              <h3>{props.name}</h3>
              <div className={classes.description}>{props.description}</div>
              <div className={classes.price}>{props.price}</div>
          </div>
          <div>
              <QtyForm onAddToCart={addToCartHandler}/>
              <p>price</p>
          </div>
      </li>
  
  )
}



export default MenuItems