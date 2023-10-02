import axios from 'axios'

const baseRequest = 'http://5.75.227.33:8080/'

export function login(payload) {
  return axios
    .post("api/login_check", payload)
    .then((response) => response.data);
}
export function getRegularOrderCheck() {
  return axios
    .get(baseRequest + 'pos/order/check')
    .then((response) => response.data);
}

export function regularOrderAction() { // action param -> update | create
  return axios
    .get(baseRequest + 'pos/order/update?access=true') // TODO: REMOVE ACCESS
    .then((response) => response.data);
}

export function fetchCatalogueData() {
  return axios
    .get(baseRequest + 'pos/catalogue')
    .then((response) => response.data)
}

export function getWantedStocks() {
  return axios
    .get(baseRequest + 'pos/stock/wanted')
    .then((response) => response.data)
}

export function setWantedStocks(payload) {
  return axios
    .post('pos/stock/wanted', payload)
    .then((response) => response.data)
}

export function getPreciseStocks() {
  return axios
    .get('pos/stock/precisely')
    .then((response) => response.data)
}

export function setPreciseStocks(payload /*[{id, quantity]}*/) {
  return axios
    .post('pos/stock/precisely', payload)
    .then((response) => response.data)
}

export function getRoughStocks() {
  return axios
    .get('pos/stock/roughly')
    .then((response) => response.data)
}

export function setRoughStocks(payload /*[{id, quantity]}*/) {
  return axios
    .post('pos/stock/roughly', payload)
    .then((response) => response.data)
}
