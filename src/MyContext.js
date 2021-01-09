import React, { useEffect, useState } from 'react';

export const MyContext = React.createContext({
  photos: [],
  cartItems: [],
  toogleFav: (id) => {},
  addNewImage: (image) => {},
  removeImage: (image) => {},
});

const MyContextProvider = (props) => {
  const [cartItemsList, setCartItemsList] = useState([]);
  const [photosList, setPhotosList] = useState([]);
  useEffect(() => {
    (async () => {
      // let response = await fetch('https://picsum.photos/v2/list');
      let response = await fetch(
        'https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json'
      );
      // let response = await fetch(
      //   'https://jsonplaceholder.typicode.com/photos/'
      // );
      let result = await response.json();
      // console.log('Use', result);
      setPhotosList(result);
    })();
  }, []);
  const addNewImageFunc = (image) => {
    setCartItemsList([...cartItemsList, image]);
  };
  const removeImageFunc = (image) => {
    setCartItemsList(cartItemsList.filter((cart) => cart.id !== image.id));
  };
  const toogleFavorite = (photoId) => {
    setPhotosList((currentPhotoList) => {
      const photoIndex = currentPhotoList.findIndex((p) => p.id === photoId);
      const newFavStatus = !currentPhotoList[photoIndex].isFavorite;
      const updatedPhotos = [...currentPhotoList];
      updatedPhotos[photoIndex] = {
        ...currentPhotoList[photoIndex],
        isFavorite: newFavStatus,
      };
      // console.log(
      //   `Changed ${photoId} id Favorite Property ${updatedPhotos[photoId].isFavorite}`
      // );
      return updatedPhotos;
    });
    // console.log(
    //   `Changed ${photoId} id Favorite Property ${photosList[photoId].isFavorite}`
    // );
  };
  return (
    <MyContext.Provider
      value={{
        photos: photosList,
        toogleFav: toogleFavorite,
        cartItems: cartItemsList,
        addNewImage: addNewImageFunc,
        removeImage: removeImageFunc,
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
};
export default MyContextProvider;

// /posts	100 posts
// /comments	500 comments
// /albums	100 albums
// /photos	5000 photos
// /todos	200 todos
// /users	10 users
