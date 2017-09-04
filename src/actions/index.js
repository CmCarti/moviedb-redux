import axios from 'axios';


export const FETCH_POPULAR = 'fetch_popular';
export const FETCH_MOVIE = 'fetch_movie';
export const SEARCH = 'search';
export const CLEAR_MOVIE = 'clear_movie'

const API_KEY = "902d2e4211ce689c9cd29ea18bc9533e";

export function fetchPopular() {
    // This request will pull the popular films from TMD
    const request = axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`);
    return {
        type: FETCH_POPULAR,
        payload: request
    }
}

export function searchDatabase(term) {
    // This request will search for the term provided
    const request = axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query="${term}"`);
    return {
        type: SEARCH,
        payload: request
    }
}

export function fetchMovie(id) {
    // This request will fetch the movie based on the id given
    const request = axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=credits,videos,recommendations,release_dates`);
    return {
        type: FETCH_MOVIE,
        payload: request
    }
}

export function clearMovie(){
    return {
        type: CLEAR_MOVIE,
        payload: null
    }
}