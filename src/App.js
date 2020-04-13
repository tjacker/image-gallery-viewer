import React, { useState, useEffect } from "react";
import ImageCard from "./components/ImageCard";
import LoadingSpinner from "./components/LoadingSpinner";
import ImageSearch from "./components/ImageSearch";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [url, setUrl] = useState(
    `https://pixabay.com/api/?key=${process.env.REACT_APP_API_KEY}&image_type=photo&pretty=true`
  );

  const handleSearch = (text) => {
    setSearchTerm(text);
    setUrl(`${url}&q=${searchTerm}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();

        setImages(data.hits);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [url]);

  return (
    <div className="container my-10 mx-auto">
      <ImageSearch searchTerm={handleSearch} />

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
