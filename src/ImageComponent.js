import './ImageComponent.css';

const ImageComponent = ({ imageUrl }) => {
  return (
    <div className="image-wrapper">
      <img src={imageUrl} alt="Visualized" className="responsive-image" />
    </div>
  );
};

export default ImageComponent;
