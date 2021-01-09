import React, { useContext } from 'react';
import { MyContext } from '../MyContext';
import PhotosItem from '../components/PhotosItem';
function Photos() {
  const photosList = useContext(MyContext).photos;

  let some_images = photosList.slice(0, 5);
  // console.log('Some', some_images);
  return (
    <ul>
      {some_images.map((photo) => {
        return <PhotosItem key={photo.id} photo={photo} />;
      })}
    </ul>
  );
}

export default Photos;
