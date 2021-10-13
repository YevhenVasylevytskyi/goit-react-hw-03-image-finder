// import PropTypes from 'prop-types';
// import style from './ImageGallery.module.css';

const ImageGallery = ({ pictures }) => {
  return (
    <ul>
      {pictures.map(picture => {
        return (
          <li key={picture.hits.id}>
            <div>{picture.hits.id}</div>
            {/* <img src={picture.hits.webformatURL} /> */}
          </li>
        );
      })}
    </ul>
  );
};

// ImageGallery.propTypes = {
//     images: PropTypes.array,
// };

export default ImageGallery;
