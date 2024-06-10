import {apiContriesConfig} from "./constants";
class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }
  getInfo(country) {
    return fetch(`${this._baseUrl}${country}`, {
      headers: this._headers,
    }).then((res) => {
      return this._handlingServerResponse(res);
    });
  }
  _handlingServerResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`код ошибки: ${res.status}`);
    }
  }
}
const apiCountries = new Api(apiContriesConfig);


export default apiCountries;

