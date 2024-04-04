import axios from "axios";

// const API_BASE = process.env.ETSY_APP_API_BASE;
const API_BASE = `localhost:4000`;
// const SEARCH_API = `${API_BASE}/api/search`;
const SEARCH_API = ` http://localhost:4000/api/search`;

export const searchWithTerm = async (searchTerm: any) => {
  const response = await axios.get(`${SEARCH_API}/${searchTerm}`);
  return response.data;
};
