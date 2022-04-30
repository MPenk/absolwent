import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { NotFound, Header, Footer } from './layouts';
import {Admin } from  './pages/admin'
import {Pool } from  './pages/pool'
import { Statistics } from './pages/statistics';

function App() {
  return (
    <BrowserRouter >
     <div data-theme='dark'>
      <Header />
     
        <Routes >
          <Route path='/' element={<Statistics />} exact />
          <Route path='/admin' element={<Admin />} exact />
          <Route path='/pool' element={<Pool/>} exact />
          <Route path='/404' element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes >
      <Footer />
      </div>

    </BrowserRouter>
  );
}

export default App;
