import React, { useEffect, useContext } from "react";
import { ContentContext } from "../../context/ContentContext";
import GridItem from "./GridItem";
import "./ContentGrid.css";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";
import Loader from "../Loader/Loader";
import { fetchPageData } from "../../utils/api";

const ContentGrid = () => {
  const { content, setPage, page, setContent, searchTerm } =
    useContext(ContentContext);

  const resetLoading = (setLoading) => {
    setPage((prevPage) => prevPage + 1);
    setLoading(false);
  };

  const { isLoading } = useInfiniteScroll(resetLoading);

  useEffect(() => {
    if (!isLoading) return;

    fetchPageData(page)
      .then((newData) => {
        setContent((prevContent) => [...prevContent, ...newData.content]);
      })
      .catch((error) => {
        console.error("Error fetching page data:", error);
      });
  }, [page, isLoading, setContent]);

  const filteredContent = content.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="content-grid">
      {filteredContent.map((item, index) => (
        <>
          {isLoading ? (
            <Loader />
          ) : (
            <GridItem
              key={index}
              title={item.name}
              thumbnail={item["poster-image"]}
            />
          )}
        </>
      ))}
    </div>
  );
};

export default ContentGrid;
