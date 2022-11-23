import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginNaHee from './pages/kimnahee/Login/Login';
import MainNaHee from './pages/kimnahee/Main/Main';
import LoginMinKi from './pages/kimminki/Login/Login';
import MainMinKi from './pages/kimminki/Main/Main';
import LoginChanghoon from './pages/shinchanghoon/Login/Login';
import MainChanghoon from './pages/shinchanghoon/Main/Main';
import LoginJaeWon from './pages/hurjaewon/Login/Login';
import MainJaeWon from './pages/hurjaewon/Main/Main';
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/LoginNaHee" element={<LoginNaHee />} />
          <Route path="/MainNaHee" element={<MainNaHee />} />
          <Route path="/LoginMinKi" element={<LoginMinKi />} />
          <Route path="/MainMinKi" element={<MainMinKi />} />
          <Route path="/LoginChangHoon" element={<LoginChanghoon />} />
          <Route path="/MainChangHoon" element={<MainChanghoon />} />
          <Route path="/LoginJaeWon" element={<LoginJaeWon />} />
          <Route path="/MainJaeWon" element={<MainJaeWon />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
