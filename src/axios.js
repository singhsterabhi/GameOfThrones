import axios from "axios";

const instance = axios.create({
  baseURL:
    "https://cors-singhster.herokuapp.com/https://anapioficeandfire.com/api/"
});

export default instance;
