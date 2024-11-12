import React, { Suspense, lazy } from "react";
import { ContentProvider } from "./context/ContentContext";
import "./styles/global.css";

const Header = lazy(() => import("./components/Header/Header"));
const ContentGrid = lazy(() => import("./components/ContentGrid/ContentGrid"));
const SearchBar = lazy(() => import("./components/SearchBar/SearchBar"));

const App = () => {
  return (
    <ContentProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="app">
          <Header />
          <SearchBar />
          <ContentGrid />
        </div>
      </Suspense>
    </ContentProvider>
  );
};

export default App;
