import axios from "axios";
// https://cors-singhster.herokuapp.com/
const instance = axios.create({
  baseURL:
    "https://anapioficeandfire.com/api/"
});

export default instance;
