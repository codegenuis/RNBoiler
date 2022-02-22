import axios from "axios";

class HttpService {
  post(API_URL, body) {
    return axios({
      method: "post",
      url: API_URL,
      data: body,
    })
      .then((response) => {
        return response;
      })
      .catch((err) => {
        return err.response ? err.response.data : err;
      });
  }

  get(API_URL) {
    return axios({
      method: "get",
      url: API_URL
    })
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        return err.response ? err.response.data : err;
      });
  }

  put(API_URL, body) {
    return axios
      .put(API_URL, body)
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        return err.response.data;
      });
  }

  delete(API_URL, body) {
    return axios
      .delete(API_URL, body)
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        return err;
      });
  }

  errorMessage(error) {
    var message =
            error.message || error.description || error.responseDescription ||
            error.toString();
    return message;
  }
}

export default new HttpService();
