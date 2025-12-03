import axios from "axios";

const Axios = axios.create({
  baseURL: "https://api.bunyodoptom.com/api/v1",
});

export default Axios;
