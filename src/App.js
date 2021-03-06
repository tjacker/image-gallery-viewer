import React, { useState, useEffect } from "react";
import ImageCard from "./components/ImageCard";
import LoadingSpinner from "./components/LoadingSpinner";
import ImageSearch from "./components/ImageSearch";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://pixabay.com/api/?key=${process.env.REACT_APP_API_KEY}&image_type=photo&pretty=true`;

      try {
        const response = await fetch(`${url}&q=${searchTerm}`);
        const data = await response.json();

        setImages(data.hits);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [searchTerm]);

  return (
    <div className="container my-10 mx-auto">
      <ImageSearch searchTerm={(text) => setSearchTerm(text)} />

      {!isLoading && !images.length && (
        <h1 className="text-3xl text-center mx-auto mt-32">
          No images found. Please revise your search criteria.
        </h1>
      )}

      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {images.map((image) => (
            <ImageCard key={image.id} image={image} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
