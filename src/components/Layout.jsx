import React from 'react'
import { Outlet} from 'react-router-dom';
import { Navigat } from './Navigation/Navigat';

export const Layout = () => {
      return (
    <>
      <header>
        <Navigat />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};