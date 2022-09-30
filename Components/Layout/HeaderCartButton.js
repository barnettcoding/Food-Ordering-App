import React, {useContext, useEffect, useState} from 'react'
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import CartContext from '../../store/cart-context'

const HeaderCartButton = (props) => {
    const [btnHighlighted, setBtnHighlighted] = useState(false)
    const headerCartContext = useContext(CartContext)
    
    const {items} = headerCartContext
    const cartItemCount = items.reduce((curNum, item) => {
        return curNum + item.amount;
    }, 0);
    const btnClasses = `${classes.button} ${btnHighlighted ? classes.bump: ''}`
    useEffect(() => {
        if (items.length === 0) {
            return
        }
    
        setBtnHighlighted(true);

        const timer = setTimeout(() => {
          setBtnHighlighted(false);
        }, 300);
    
        return () => {
          clearTimeout(timer);
        };
      }, [items]);
  return (
    <button className={btnClasses} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>Your Cart</span>  
        <span className={classes.badge}>{cartItemCount}</span>
    </button>
  )
}

export default HeaderCartButton