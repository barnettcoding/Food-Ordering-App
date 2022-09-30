import {Fragment} from 'react';
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'


const Header = (props) => {
  return (
    <Fragment>
    <header className={classes.header}> 
      <h1>Gourmet Lunch Break</h1>
    <HeaderCartButton onClick={props.onShowCart} />
    </header>
    <div className={classes['main-image']}> 
    <img src={require('../../assets/meals.jpg').default} alt="sup" /> 
    </div>
    </Fragment>
  )
};

export default Header;
