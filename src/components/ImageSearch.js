import React, { useState } from "react";

const ImageSearch = ({ searchTerm }) => {
  const [text, setText] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();

    searchTerm(text);
  };

  return (
    <div className="max-w-sm rounded overflow-hidden mb-10 mx-auto">
      <form className="w-full max-w-sm" onSubmit={onFormSubmit}>
        <div className="flex items-center border-b border-b-2 border-teal-500 py-2 px-1">
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            id="search-term"
            type="text"
            placeholder="Enter search term"
            onChange={(event) => setText(event.target.value)}
          ></input>
          <button
            className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="submit"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default ImageSearch;
