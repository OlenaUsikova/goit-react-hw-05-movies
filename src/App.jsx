import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

import HomePage from 'pages/HomePage/HomePage';
const Layout = lazy(()=>import('./components/Layout'))
const Movies = lazy(()=>import('pages/Movies/Movies'))
const MoviePage = lazy(()=>import('pages/MoviePage/MoviePage'))
const Cast = lazy(()=>import('components/Subpages/Cast'))
const Reviews = lazy(()=>import('components/Subpages/Reviews'))


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
        <Route path="*" element={<Navigate to='/'/>} />
      </Routes>
    </>
  );
};
