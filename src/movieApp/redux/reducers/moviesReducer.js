import { ADD_NEW_MOVIE } from "../constants";
const initialState = {
    movies: [
        {
            title: "Django Unchained",
            category: "Western",
            id: Math.random(),
            rate: 8,
            cover: "https://m.media-amazon.com/images/I/71ZTyvsUBXS._AC_SY679_.jpg",
            cast: "Jamie Foxx, Leonardo DiCaprio, Christoph Waltz",
            release: "2012-12-25",
        },
        {
            title: "The Hateful Eight",
            category: "Mistery",
            id: Math.random(),
            rate: 7,
            cover: "https://c8.alamy.com/comp/FX7KBR/the-hateful-eight-year-2015-usa-director-quentin-tarantino-movie-poster-FX7KBR.jpg",
            cast: "Samuel L.Jackson, Kurt Russel, Jennifer Jason Leigh",
            release: "2015-12-30 ",
        },
        {
            title: "Once Upon a Time in Hollywood",
            category: "Drama",
            id: Math.random(),
            rate: 7,
            cover: "https://m.media-amazon.com/images/M/MV5BOTg4ZTNkZmUtMzNlZi00YmFjLTk1MmUtNWQwNTM0YjcyNTNkXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_FMjpg_UX1000_.jpg",
            cast: "Leonardo DiCaprio, Brad Pitt, Margot Robbie",
            release: "2019-07-26",
        },
        {
            title: "Inglourious Basterds",
            category: "War",
            id: Math.random(),
            rate: 8,
            cover: "https://m.media-amazon.com/images/I/61PXdxTJGPL._AC_SY741_.jpg",
            cast: " Brad Pitt, Diane Kruger, Eli Roth",
            release: "2009-08-20",
        },
        {
            title: "Kill Bill Vol. 1",
            category: "Crime",
            id: Math.random(),
            rate: 9,
            cover: "https://m.media-amazon.com/images/I/81Az82YYZaS._AC_SL1500_.jpg",
            cast: " Uma Thurman, David Carradine, Daryl Hannah",
            release: "2003-10-10",
        },
        {
            title: "Kill Bill 2",
            category: "Crime",
            id: Math.random(),
            rate: 8,
            cover: "https://c8.alamy.com/comp/BKGG4D/kill-bill-volume-2-2004-poster-kbl2-002-post1-BKGG4D.jpg",
            cast: "Uma Thurman, David Carradine, Michael Madsen",
            release: "2004-04-16",
        },
    ],
    search: "",
    rate: 0,
};

const moviesReducer = (state = initialState, action) => {
    let { type, payload } = action;

    switch (type) {
        case "GET_SEARCH":
            return {
                ...state,
                search: payload,
            };
        case "GET_RATE":
            return {
                ...state,
                rate: payload,
            };
        case ADD_NEW_MOVIE:
            return {
                ...state,
                movies: [...state.movies, payload],
            };
        default:
            return state;
    }
};

export default moviesReducer;
