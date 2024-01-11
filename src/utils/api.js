import axios from "axios";
const BASE_URL="https://www.googleapis.com/customsearch/v1"
const params ={
    key:'AIzaSyCjGDRJMvcJzSRa5Sl70v_ZelKZ1mtEP2c',
    cx:'87666ff7e9d9c4a5a'
}
export const fetchDataFromApi = async (payload) => {
    const {data}= await axios.get(BASE_URL, {
        params: {...params, ...payload}
    })
    return data;
};
