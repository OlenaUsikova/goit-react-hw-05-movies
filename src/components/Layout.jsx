import React, { Suspense } from 'react'
import { Outlet} from 'react-router-dom';
import { Navigat } from './Navigation/Navigat';

const Layout = () => {
      return (
    <>
      <header>
        <Navigat />
      </header>
      <main>
      <Suspense fallback={<h2>Loading.....</h2>}>
        <Outlet />
      </Suspense>
      </main>
    </>
  );
};
export default Layout