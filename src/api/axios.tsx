import axios from "axios";

export const customMoviesApi = axios.create({
	baseURL: "https://api.movies/",
});
