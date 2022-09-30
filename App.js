import React, { useState} from 'react'
import Header from "./Components/Layout/Header";
import Menu from './Components/MenuItems/Menu';
import Cart from './Components/Cart/Cart'
import CartProvider from './store/CartProvider';



function App() {
  const [cartIsShown, setCartisShown] = useState(false);

  const showCartHandler = () => {setCartisShown(true)}
  const hideCartHandler = () => {setCartisShown(false)}

  return (
    <CartProvider >
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler} />
      <main>
        <Menu />
      </main>
    </CartProvider>
  );
}

export default App;
