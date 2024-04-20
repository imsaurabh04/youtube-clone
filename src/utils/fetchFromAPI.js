import axios from "axios";

const YT_BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
    params: {
        maxResults: '50',
        regionCode: 'IN',
    },
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

export const fetchFromAPI = async(url) => {
    let { data } = await axios.get(`${YT_BASE_URL}/${url}`, options);
    return data;
}
