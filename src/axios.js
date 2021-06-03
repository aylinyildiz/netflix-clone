import axios from "axios";

//baseUrl to make request to the md
const instance = axios.create({
    baseURL:"https://api.themoviedb.org/3",
});

export default instance;