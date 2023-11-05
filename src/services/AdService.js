import axios from "axios";
import URL from "../config/url.js";

const AdService = {
  list: (payload) => {
    return axios({
      method: "GET",
      baseURL: URL.api(),
      url: `/ads`,
      // headers: {},
      params: payload,
    });
  },
};

export default AdService;
