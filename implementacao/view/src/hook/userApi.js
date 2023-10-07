import axios from "axios";

export const useApi = axios.create({
    baseURL: "http://localhost:8080/"
})