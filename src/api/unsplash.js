import axios from "axios";
const api = "https://api.unsplash.com/";

export default axios.create({
  baseURL: api,
  headers: {
    Authorization: "Client-ID fpSzAlW8KuUhUkwDW9TgxucJ2rPtpeu8e97HU4ypmSM",
  },
});
