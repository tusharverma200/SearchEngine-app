import axios from "axios";
const BASE_URL = "https://www.googleapis.com/customsearch/v1"
const params = {
    key: process.env.GOOGLE_SEARCH_API_KEY,
    cx: process.env.GOOGLE_SEARCH_CX,
}
export const fetchDataFromApi = async (payload) => {
    const { data } = await axios.get(BASE_URL, {
        params: { ...params, ...payload }
    })
    return data;
};
