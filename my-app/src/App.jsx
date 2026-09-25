import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import apiKey from "./config";

import Nav from "./components/Nav";
import Search from "./components/Search";
import Gallery from "./components/Gallery";

import "./App.css";

function App() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async (query) => {
    setLoading(true);

    try {
  const response = await fetch(
  `https://pixabay.com/api/?key=${apiKey}&q=${query}&image_type=photo`
);

      const data = await response.json();

      setPhotos(data.hits);
    } catch (error) {
      console.log("Error fetching data:", error);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchData("cats");
  }, []);

  return (
    <>
      <Search fetchData={fetchData} />

      <Nav />

      <Routes>
        <Route
path="/"
element={<Navigate to="/cats" />}
/>
     <Route
  path="/cats"
  element={
    <Gallery
      photos={photos}
      fetchData={fetchData}
      loading={loading}
    />
  }
/>

<Route
  path="/dogs"
  element={
    <Gallery
      photos={photos}
      fetchData={fetchData}
      loading={loading}
    />
  }
/>

<Route
  path="/computers"
  element={
    <Gallery
      photos={photos}
      fetchData={fetchData}
      loading={loading}
    />
  }
/>

<Route
  path="/search/:query"
  element={
    <Gallery
      photos={photos}
      fetchData={fetchData}
      loading={loading}
    />
  }
/>

<Route
  path="*"
  element={<h2>Page Not Found</h2>}
/>
      </Routes>
    </>
  );
}

export default App;