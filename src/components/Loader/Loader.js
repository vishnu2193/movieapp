import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="loader">
      <img
        src="https://test.create.diagnal.com/images/placeholder_for_missing_posters.png"
        alt="Loading..."
        className="loader-image"
      />
    </div>
  );
};

export default Loader;
