import React from 'react';
import { Layout } from './Layout';
import { Route, Routes} from 'react-router-dom';
// import NotFound from './pages/NotFound';

import {Movies} from './pages/Movies/Movies';
import {MovieDetails} from './pages/Movies/MoviePage';
import Cast from './pages/Movies/MoviePage';
import Reviews from './pages/Movies/MoviePage';
import { HomePage } from 'pages/HomePage/HomePage';
import { MoviePage } from 'pages/MoviePage/MoviePage';



export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/movies" element={<Movies />} />
          {/* <Route path="/movieid" element={<Navigate to="/" />} /> */}
          <Route path="/movieid" element={<MoviePage />}/>
          <Route path="/movieid" element={<MovieDetails />}>
            <Route path="/movieid/cast" element={<Cast />} />
            <Route path="/movieid/reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
