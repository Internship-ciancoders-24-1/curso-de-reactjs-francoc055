import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Badges from '../pages/Badges';
import BadgeNew from '../pages/BadgeNew';
import BadgeEdit from '../pages/BadgeEdit';
import BadgeDetailsContainer from '../pages/BadgeDetailsContainer';
import NotFound from './NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/badges" element={<Badges />} />
        <Route path="/badges/new" element={<BadgeNew />} />
        <Route path="/badges/:badgeId" element={<BadgeDetailsContainer />} />
        <Route path="/badges/:badgeId/edit" element={<BadgeEdit />} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
