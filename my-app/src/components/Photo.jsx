const Photo = ({ photo }) => {
  return (
    <li>
      <img src={photo.webformatURL}/>
    </li>
  );
};

export default Photo;