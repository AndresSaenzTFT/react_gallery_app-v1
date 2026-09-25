import Photo from "./Photo";

const PhotoList = ({ photos, title }) => {
  return (
    <div className="photo-container">
      <h2>{title}</h2>

      {photos.length > 0 ? (
        <ul>
          {photos.map((photo) => (
            <Photo
              key={photo.id}
              photo={photo}
            />
          ))}
        </ul>
      ) : (
        <p>No Photos Found</p>
      )}
    </div>
  );
};

export default PhotoList;