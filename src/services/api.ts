import axios from "axios";

const api = axios.create({
    baseURL: "https://luigivanin-my-wallet.herokuapp.com/",
});

export default api;
