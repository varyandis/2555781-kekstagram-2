
import './photo/edite-photo/scale.js';
const BASE_URL = 'https://31.javascript.htmlacademy.pro/kekstagram';
const Route = {
  GET_DATA: '/data',
  SEND_DATA: '/',
};

const getData = (onSuccess, onError) => fetch(`${BASE_URL}${Route.GET_DATA}`)
  .then((response) => {
    if (response.ok) {
      return response;
    }
    throw new Error(`${response.status} — ${response.statusText}`);
  }).then((response) => response.json())
  .then((response) => onSuccess(response))
  .catch(onError);

const sendData = (body) => fetch(
  `${BASE_URL}${Route.SEND_DATA}`,
  {
    method: 'POST',
    body: body,
  }).then((response) => {
  if (response.ok) {
    return response;
  }
  throw new Error(`${response.status} — ${response.statusText}`);
}
);


export {getData, sendData};
