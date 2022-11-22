import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { initInterceptor } from 'services/config';
import CardDetail from 'pages/detail-card';
import Login from 'pages/login';
import Landing from 'pages/landing-page';
import Search from 'pages/search';
import Cards from 'pages/cards';
import Edit from 'pages/edit';

initInterceptor({
  baseURL: 'https://lava.herokuapp.com',
  headers: {
    'Cotent-Type': 'application/json',
  },
});

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/search' element={<Search />} />
      <Route path='/cards' element={<Cards />} />
      <Route path='/active' element={<Edit />} />
      <Route path='/detail-card' element={<CardDetail />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  );
};

export default AppRouter;
