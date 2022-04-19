import axios from "axios";
// const URL = "https://61eeb627d593d20017dbb0b4.mockapi.io/contacts/";
const URL = "https://61eeb627d593d20017dbb0b4.mockapi.io/";

export default axios.create({
  baseURL: URL,
  headers: {
    "Content-Type": "application/json",
  },
});
