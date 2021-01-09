import React, { useContext } from 'react';
import { MyContext } from '../MyContext';
import CartsItem from '../components/CartsItem';
function Cart() {
  const cartItemsList = useContext(MyContext).cartItems;
  let price = cartItemsList.length * 5.99;
  return (
    <div
      style={{
        padding: '10px',
        marginTop: '50px',
        marginBottom: '20px',
      }}
    >
      <p>
        {price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
      </p>
      <ul>
        {cartItemsList.length > 0 &&
          cartItemsList.map((photo) => {
            return <CartsItem key={photo.id} photo={photo} />;
          })}
      </ul>
    </div>
  );
}

export default Cart;
