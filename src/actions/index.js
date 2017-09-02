import axios from 'axios';


export const FETCH_POPULAR = 'fetch_popular';
export const SEARCH = 'search';

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
    const request = axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query="${term}"`)
        
    console.log(request);
    return {
        type: SEARCH,
        payload: request
    }
}