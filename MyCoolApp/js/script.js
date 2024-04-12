const API_URL = 'https://api.themoviedb.org/3'
const IMG_PATH = 'https://image.tmdb.org/t/p/w500'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=4111aa0c8caf6b688cf21b5cf132327a&query="'

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

function getMovies(url) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            showMovies(data.results);
        })
        .catch(error => {
            console.error('Error fetching movies:', error);
        });
}


function showMovies(movies) {
    main.innerHTML = ''

    movies.forEach((movie) => {
        const { title, poster_path, vote_average, overview } = movie

        const movieEl = document.createElement('div')
        movieEl.classList.add('movie')

        movieEl.innerHTML = `
            <img src="${IMG_PATH + poster_path}" alt="${title}">
            <div class="movie-info">
          <h3>${title}</h3>
          <span class="${getClassByRate(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
          <h3>Overview</h3>
          ${overview}
        </div>
        `
        main.appendChild(movieEl)
    })
}

function getClassByRate(vote) {
    if (vote >= 8){

    }
    if (vote >= 5 && vote < 8){

    }
    else{

    }

}

// Get initial movies
getMovies(API_URL)

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const searchTerm = search.value // we create a var with the search term

    if(searchTerm && searchTerm !== '') { // and if the term exists
        getMovies(SEARCH_API + searchTerm)

        search.value = ''
    } else {
        window.location.reload()
    }
})
