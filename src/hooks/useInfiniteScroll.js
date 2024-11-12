import { useState, useEffect } from "react";

const useInfiniteScroll = (callback) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 100 <
        document.documentElement.offsetHeight ||
      isLoading
    )
      return;

    setIsLoading(true);

    callback(() => setIsLoading(false));
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoading, callback]);

  return { isLoading };
};

export default useInfiniteScroll;
