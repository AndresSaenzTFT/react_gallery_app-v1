import { useState } from 'react'
import Nav from "./components/Nav";
import Search from "./components/Search";
import './App.css'
import { Routes, Route ,Navigate } from 'react-router-dom';
import PhotoList from './components/PhotoList';

const fetchData = async (query) => {
  setLoading(true);

  try {
    const response = await fetch(
      `https://pixabay.com/api/?key=${apiKey}&q=${query}&image_type=photo`
    );

    const data = await response.json();

    setPhotos(data.hits);
  } catch (error) {
    console.log(error);
  }

  setLoading(false);
};


function App() {
  const [count, setCount] = useState(0)
const [photos, setPhotos] = useState([]);
const [loading, setLoading] = useState(false);
  return (
    <Routes>

  <Route
    path="/"
    element={<Navigate to="/cats" />}
  />

  <Route
    path="/cats"
    element={
      <PhotoList
        photos={photos}
        title="Cats"
      />
    }
  />

  <Route
    path="/dogs"
    element={
      <PhotoList
        photos={photos}
        title="Dogs"
      />
    }
  />

  <Route
    path="/computers"
    element={
      <PhotoList
        photos={photos}
        title="Computers"
      />
    }
  />

  <Route
    path="/search/:query"
    element={
      <PhotoList
        photos={photos}
        title="Results"
      />
    }
  />

</Routes>
  )
}

export default App
