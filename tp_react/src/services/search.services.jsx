import axios from "axios";


const API_URL = "https://api.uprodit.com/v1/search/all?usecase=perso&startIndex=0&maxResults=1";
const API_URL1 = "https://api.uprodit.com/v2/profile/picture/f/"



const Searchall = async (url) => {
  const result = await axios.post(`https://api.uprodit.com/v1/authheader`, {
    "appid":"challenge_uprodit",
    "env":"production",
    "uri": url
  });
  return result.data;
};

const SearchFinal = async (auth) => {
  const result = await axios.get(`${API_URL}`, {
    headers: {
      Authorization : auth.authorization}
  })
  return result.data
};
const SearchImage= async (id,auth) => {
  const result = await axios.get(`${API_URL1}${id}`, {
    headers: {
      Authorization : auth.authorization}
  })
  return result.data;
};
function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
 export const  fetchSearch = async (searchValue , auth) => {
  const result = await axios.get(`${API_URL}`, {
    headers: {
      Authorization : auth.authorization}
  })
  return result.data.filter((search) => 
  search.denomination.includes(searchValue));

};


const SearchService = {
    Searchall,
    SearchFinal,
    SearchImage,
    fetchSearch
};

export default SearchService;
