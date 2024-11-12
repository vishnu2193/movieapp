import React from "react";
import "./GridItem.css";

const GridItem = React.memo(({ title, thumbnail }) => {
  return (
    <div className="grid-item">
      <img
        src={`https://test.create.diagnal.com/images/${thumbnail}`}
        alt={title}
        className="grid-item__thumbnail"
        loading="lazy"
      />
      <p className="grid-item__title">{title}</p>
    </div>
  );
});

export default GridItem;
