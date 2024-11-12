import { API_BASE_URL } from "./constants";

export const fetchPageData = async (page) => {
  try {
    const response = await fetch(`${API_BASE_URL}/data/page${page}.json`);
    const data = await response.json();
    return data.page["content-items"].content;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};
