import React, { useContext, useState } from 'react';
import { MyContext } from '../MyContext';
import PropTypes from 'prop-types';

function CartsItem({ photo }) {
  const [order, setOrder] = useState(false);
  const [hover, setHover] = useState(false);
  const removeImage = useContext(MyContext).removeImage;
  const removeHandler = (image) => {
    removeImage(image);
  };
  const placeThisOrder = (image) => {
    setOrder(true);
    setTimeout(() => {
      setOrder(false);
      removeImage(image);
      console.log('Congrats, Order is Placed 😋');
    }, 3000);
  };
  return (
    <div style={{ marginTop: '90px' }}>
      <div
        className='gallery'
        // onMouseEnter={() => setHover(true)}
        // onMouseLeave={() => setHover(false)}
        style={{
          // margin: 'auto',
          // width: '40%',
          // border: '3px solid green',
          padding: '10px',
          //   marginTop: '50px',
          marginBottom: '20px',
        }}
      >
        <img
          className='round-img my-1'
          src={photo.url}
          alt={photo.id}
          width='600'
          height='400'
          // style={{ borderRadius: 15 }}
        />
        <div className='desc'>
          <button onClick={() => removeHandler(photo)}>
            <i
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              style={{ marginBottom: '10px' }}
              className={hover ? 'fa fa-trash' : 'fa fa-trash-o'}
            ></i>
          </button>
          <button onClick={() => placeThisOrder(photo)}>
            {order ? 'Ordering...' : 'Place order'}
          </button>
        </div>
      </div>
    </div>
  );
}
CartsItem.propTypes = {
  photo: PropTypes.object,
  className: PropTypes.string,
};
export default CartsItem;
