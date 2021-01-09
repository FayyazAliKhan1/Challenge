import React, { useState, useContext, useEffect } from 'react';
import { MyContext } from '../MyContext';
import PropTypes from 'prop-types';

function PhotosItem({ photo }) {
  const [hover, setHover] = useState(false);
  const cartItemsList = useContext(MyContext).cartItems;
  const toogleFav = useContext(MyContext).toogleFav;
  const addNewImage = useContext(MyContext).addNewImage;
  const removeImage = useContext(MyContext).removeImage;
  const toggleFavHandler = (id) => {
    // console.log('Id', id);
    toogleFav(id);
  };
  useEffect(() => {
    console.log('Image Hover', hover);
  }, [hover]);
  const addHandler = (image) => {
    if (cartItemsList.filter((p) => p.id === photo.id).length > 0) {
      return removeImage(image);
    }
    addNewImage(image);
  };
  return (
    <div style={{ marginTop: '90px' }}>
      <div
        className='gallery'
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          // margin: 'auto',
          // width: '40%',
          // border: '3px solid green',
          padding: '10px',
          marginTop: '50px',
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
        {hover && (
          <div className='desc'>
            <button onClick={() => toggleFavHandler(photo.id)}>
              <i
                style={{ marginBottom: '10px' }}
                className={photo.isFavorite ? 'fa fa-heart' : 'fa fa-heart-o'}
              ></i>
            </button>
            <button onClick={() => addHandler(photo)}>
              <i
                className={
                  cartItemsList.filter((p) => p.id === photo.id).length > 0
                    ? 'fa fa-shopping-cart'
                    : 'fa fa-plus'
                }
              ></i>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
PhotosItem.propTypes = {
  photo: PropTypes.object,
  className: PropTypes.string,
};
export default PhotosItem;
