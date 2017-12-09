import * as types from '../constants/actionTypes';
import fetch from 'isomorphic-fetch';
// const request = require('request');

export const searchArticles = (response) => ({
  type: types.SEARCH_ARTICLES,
  payload: response,
});

export const handleSearch = (value) => ({
  type: types.HANDLE_SEARCH,
  payload: value,
});

export const sliderChange = (value) => ({
  type: types.SLIDER_CHANGE,
  payload: value,
});

export const filterArticles = () => ({
  type: types.FILTER_ARTICLES,
});

export function handleKeyPress(event) {
  return function (dispatch, getState) {
    if (event.charCode === 13) {
      // console.log('keypressed', event);
      // console.log('value in textfield is: ', getState().steering.textValue);
      dispatch(onSubmit());
    }
  }
}

export const fetchPosts = () => ({
  type: types.FETCH_POSTS,
});

export function onSubmit() {
  return function (dispatch, getState) {
    const stateText = getState().steering.textValue;
    dispatch(fetchPosts());
    return fetch(`http://localhost:3000/api/articles/?q=${stateText}`)
      .then(response => response.json())
      .then(json => dispatch(searchArticles(json)))
      .catch(err => {
        console.log(err);
      });
  };
}



export const personalizeUser = (data) => ({
  type: types.PERSONALIZE_USER,
  payload: data,
});

export const setSlider = () => ({
  type: types.SET_SLIDER,
});

export const addFavorite = (favorite) => ({
  type: types.ADD_FAVORITE,
  payload: favorite,
});

export const logout = () => ({
  type: types.LOGOUT,
});

export const updateFavorites = (favorite) => {
  return (dispatch, getState) => {
    const favorites = [...getState().user.favorites, favorite];
    const email = getState().user.email;
    return fetch('http://localhost:3000/user/updateFavorites', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        favorites,
      }),
    }).then(dispatch(addFavorite(favorite)))
    .catch(err => console.log(err));
  };
};

export const updateSlider = () => {
  return (dispatch, getState) => {
    const email = getState().user.email;
    const slider = getState().main.sliderValue;
    return fetch('http://localhost:3000/user/updateSlider', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        slider,
      }),
    }).then(dispatch(setSlider()))
    .catch(err => console.log(err));
  };
};

export const login = () => {
  return (dispatch, getState) => {
    return fetch('http://localhost:3000/user', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: getState().user.email }),
    })
      .then(response => response.json())
      .then(json => dispatch(personalizeUser(json)))
      .catch(err => {
        console.log(err);
      });
  };
};

export function onLoad() {
  return function (dispatch, getState) {
    dispatch(fetchPosts());
    return fetch('http://localhost:3000/api/top')
      .then(response => response.json())
      .then(json => {
        dispatch(searchArticles(json));
        dispatch(login());
      })
        .catch(err => {
        console.log(err);
      });
  };
}
