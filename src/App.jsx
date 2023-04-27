import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import HomePage from 'pages/HomePage/HomePage';
import { Movies } from 'pages/Movies/Movies';
import { MoviePage } from 'pages/MoviePage/MoviePage';
import  Cast  from 'pages/MoviePage/Cast';
import  Reviews  from 'pages/MoviePage/Reviews';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MoviePage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
