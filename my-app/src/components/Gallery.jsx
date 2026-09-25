import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import PhotoList from "./PhotoList";

const Gallery = ({ photos, fetchData, loading }) => {
  const location = useLocation();

  useEffect(() => {
    const query = location.pathname.split("/").pop();

    if (query) {
      fetchData(query);
    }
  }, [location.pathname]);

  return (
    <PhotoList
      photos={photos}
      title={location.pathname.split("/").pop()}
      loading={loading}
    />
  );
};

export default Gallery;