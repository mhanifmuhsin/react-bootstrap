import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery';
import MovieRequest from './MovieRequest';
import ListMovie from './ListMovie';
import React, { useState, useEffect } from 'react';

function App() {
  const [movies, setMovies] = useState([]);
  const [show, setShow] = useState(false);
  const [imdbKey, setImdbKey] = useState('');
  const [keyword, setKeyword] = useState('');
  const [detailMovies, setDetailMovies] = useState([]);


  const getMovieRequest = async (keyword) => {
    const url = `http://www.omdbapi.com/?apikey=e2b77af0&s=${keyword}`;
    const response = await fetch(url);
    const responseJson = await response.json();
    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };
  const getDetailMovie = async (imdbKey) => {
    const url = `http://www.omdbapi.com/?apikey=e2b77af0&i=${imdbKey}`;
    const response = await fetch(url);
    const responseJson = await response.json();
    if (responseJson) {
      setDetailMovies(responseJson);
    }
  };

  useEffect(() => {
    getMovieRequest(keyword);
  }, [keyword]);

  useEffect(() => {
    getDetailMovie(imdbKey);
  }, [imdbKey]);

  const handleShow = (e) => {
    e.preventDefault();
    setShow(true);
    const data = e.target.dataset.imdbid;
    setImdbKey(data);
  }
  
  const handleClose = () => setShow(false);

  return (
    <div>
      <MovieRequest keyword={keyword} setKeyword={setKeyword} />
      <ListMovie movies={movies} handleShow={handleShow} show={show}
                 handleClose={handleClose} imdbKey={imdbKey} detailMovies={detailMovies} />
    </div>
  );
}

export default App;
