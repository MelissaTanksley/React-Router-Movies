import React, { useState, useEffect } from 'react';
import SavedList from './Movies/SavedList';
import { Route } from 'react-router-dom';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
import axios from 'axios';

const setMovieList = {}

const App = () => {
  const [savedList, setSavedList] = useState([]);
  
  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovieList(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  /*const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  }; */

  return (
    <div>
      <SavedList list={savedList} />
      <div>Replace this Div with your Routes</div>
      <Router>
      <Route exact path="/">
        <MovieList />
      </Route>
      <Route exact path="/movies/:id">
        <Movie addToSavedList={addToSavedList} />
      </Route>
    </div>
  );
};

export default App;
