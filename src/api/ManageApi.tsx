import { baseRequest } from "./Api";

export default {
  login(payload) {
    return baseRequest
      .post("api/login_check", payload)
      .then((response) => response.data);
  },
  getRegularOrderCheck() {
    return baseRequest
      .get("pos/order/check")
      .then((response) => response.data);
  },
  regularOrderAction(action = 'create') {
    return baseRequest
      .get("pos/order/"+action)
      .then((response) => response.data);
  },
  fetchCatalogueData() {
    return baseRequest
    .get('pos/catalogue')
    .then((response) => response.data)
  },
  getWantedStocks() {
    return baseRequest
    .get('pos/stock/wanted')
    .then((response) => response.data)
  },
  setWantedStocks(payload) {
    return baseRequest
    .post('pos/stock/wanted', payload)
    .then((response) => response.data)
  },
  getPreciseStocks() {
    return baseRequest
    .get('pos/stock/precisely')
    .then((response) => response.data)
  },
  setPreciseStocks(payload /*[{id, quantity]}*/) {
    return baseRequest
    .post('pos/stock/precisely', payload)
    .then((response) => response.data)
  },
  getRoughStocks() {
    return baseRequest
    .get('pos/stock/roughly')
    .then((response) => response.data)
  },
  setRoughStocks(payload /*[{id, quantity]}*/) {
    return baseRequest
    .post('pos/stock/roughly', payload)
    .then((response) => response.data)
  },
};
