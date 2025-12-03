import axios from "axios";

const Axios = axios.create({
  baseURL: "https://api.bunyodoptom.uz/api/v1",
});

export default Axios;
