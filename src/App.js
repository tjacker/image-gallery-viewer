import React, { useState, useEffect } from "react";
import ImageCard from "./components/ImageCard";
import LoadingSpinner from "./components/LoadingSpinner";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");
  const [url, setUrl] = useState(
    `https://pixabay.com/api/?key=${process.env.REACT_APP_API_KEY}&image_type=photo&pretty=true`
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${url}&q=${term}`);
        const data = await response.json();

        setImages(data.hits);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [url, term]);

  return (
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
