/* eslint-disable camelcase */
import axios from 'axios';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/Cr80pbkuf1RrEQZCSqfj/books/';
const REMOVE_BOOK_SUCCESS = 'REMOVE_BOOK_SUCCESS';
const ADD_BOOK_SUCCESS = 'ADD_BOOK_SUCCESS';
const GET_BOOK_REQUEST = 'GET_BOOK_REQUEST';
const GET_BOOK_SUCCESS = 'GET_BOOK_SUCCESS';
const GET_BOOK_FAILURE = 'GET_BOOK_FAILURE';

export const getBookRequest = () => ({
  type: GET_BOOK_REQUEST,
});

export const getBookSuccess = (books) => ({
  type: GET_BOOK_SUCCESS,
  payload: books,
});

export const getBookFailure = (error) => ({
  type: GET_BOOK_FAILURE,
  payload: error,
});

export const addBookSuccess = (payload) => ({
  type: ADD_BOOK_SUCCESS,
  payload,
});

export const removeBookSuccess = (payload) => ({
  type: REMOVE_BOOK_SUCCESS,
  payload,
});

export const fetchBooks = () => (dispatch) => {
  dispatch(getBookRequest);
  axios.get(url)
    .then((response) => {
      const books = Object.entries(response.data).map((book) => ({
        id: book[0],
        title: book[1][0].title,
        category: book[1][0].category,
        author: 'John Doe',
      }));
      dispatch(getBookSuccess(books));
    })
    .catch((error) => {
      const errorMsg = error.message;
      dispatch(getBookFailure(errorMsg));
    });
};

export const addBook = (newBook) => (dispatch) => {
  const { item_id, category, title } = newBook;
  axios.post(url, {
    item_id,
    title,
    category,
  }).then(() => {
    dispatch(addBookSuccess({
      id: item_id,
      title,
      category,
      author: 'John Doe',
    }));
  });
};

export const removeBook = (id) => (dispatch) => {
  fetch(`url${id.id}`, {
    method: 'DELETE',
    body: JSON.stringify({
      item_id: id,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then(() => {
      dispatch(removeBookSuccess(id));
    });
};

export const initialState = {
  loading: false,
  books: [],
  error: '',
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOK_REQUEST:
      return { ...state, loading: true };

    case GET_BOOK_SUCCESS:
      return {
        ...state,
        loading: true,
        books: [...state.books, ...action.payload],
        error: '',
      };

    case GET_BOOK_FAILURE:
      return {
        loading: false,
        books: [],
        error: action.payload,
      };

    case ADD_BOOK_SUCCESS:
      return { ...state, books: [...state.books, action.payload] };

    case REMOVE_BOOK_SUCCESS:
      return {
        ...state,
        books: [...state.books.filter((book) => book.id !== action.payload.id)],
      };

    default:
      return state;
  }
};

export default booksReducer;
