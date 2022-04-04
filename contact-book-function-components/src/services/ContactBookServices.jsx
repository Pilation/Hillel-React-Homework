export const contactBaseURL = `https://61eeb627d593d20017dbb0b4.mockapi.io/contacts`;

export function controller(URL, method = "GET", obj) {
  let options = {
    method: method,
    headers: {
      "Content-type": "application/json",
    },
  };
  if (obj) {
    options.body = JSON.stringify(obj);
  }
  return fetch(URL, options).then((resp) => resp.json());
}
