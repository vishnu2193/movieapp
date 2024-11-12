import React, { createContext, useState, useEffect } from "react";
import { fetchPageData } from "../utils/api";

export const ContentContext = createContext();

export const ContentProvider = ({ children }) => {
  const [content, setContent] = useState([]);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const loadContent = async () => {
      const newContent = await fetchPageData(page);
      setContent((prevContent) => [...prevContent, ...newContent]);
    };
    loadContent();
  }, [page]);

  return (
    <ContentContext.Provider
      value={{ content, setPage, searchTerm, setSearchTerm }}
    >
      {children}
    </ContentContext.Provider>
  );
};
