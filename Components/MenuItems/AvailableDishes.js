import React from 'react';
import Card from '../UI/Card'
import MenuItems from './MenuItems'
import classes from './AvailableDishes.module.css';


const MENU = [
    {
      id: 'm1',
      name: 'Tacos Birria',
      description: 'Mexican stewed beef, chihuahua cheese, corn tortilla, consumme',
      price: 17.99,
    },
    {
      id: 'm2',
      name: 'Korean BBQ tacos',
      description: 'Korean BBQ pulled pork, Kimchi slaw',
      price: 16.59,
    },
    {
      id: 'm3',
      name: 'Italian Burger',
      description: 'On focaccia, Mozzarella, basil aioli, tomato',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Soul Bowl',
      description: 'Beef Stew, collard greens, mac and cheese, cornbread bites',
      price: 13.99,
    },
  ];

const AvailableDishes = () => {
    const MenuItemList = MENU.map((dish) => 
    <MenuItems id={dish.id} key={dish.id} name={dish.name} description={dish.description} price={dish.price} />);

  return (
    <section className={classes.meals}>
          <Card>
            <ul>{MenuItemList}</ul>
          </Card>
        </section>
  );
};

export default AvailableDishes;