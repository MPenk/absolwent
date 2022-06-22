import './App.css';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { NotFound, Header, Footer } from './layouts';
import { Admin } from './pages/admin'
import { Pool } from './pages/pool'
import { Survey } from './pages/survey'
import { Statistics } from './pages/statistics';
import { CssBaseline } from '@mui/material';
import { Login } from './pages/admin/login';
import Container from '@mui/material/Container';
import Alerts from './components/Alerts';
import Backdrop from './components/Backdrop';
import darkScrollbar from '@mui/material/darkScrollbar';
import { SurveyFilled } from './components/survey/SurveyFilled';

const darkTheme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body:  darkScrollbar(),
      },
    },
  },
  palette: {
    mode: 'dark',
  },
});
const lightTheme = createTheme({
  palette: {

  },
});

function App(props) {
  const [isDarkTheme, setIsDarkTheme] = useState(props.darkMode.isDark);

  useEffect(() => {
    setIsDarkTheme(props.darkMode.isDark)
  }, [props.darkMode])

  return (
    <BrowserRouter >
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <CssBaseline />
        <div data-theme={isDarkTheme ? 'dark' : 'light'} className='App'>
          <Backdrop />
          <Header />
          <Alerts />
          <Container sx={{ flex: "1" }}>
            <Routes >
              <Route path='/' element={<Statistics />} exact />
              <Route path='/admin' element={<Admin />} exact />
              <Route path='/admin/login' element={<Login />} exact />
              <Route path='/pool' element={<Pool />} exact />
              <Route path='/survey' element={<Survey />} exact />
              <Route path='/survey/thanks' element={<SurveyFilled />} exact />
              <Route path='/404' element={<NotFound />} />
              <Route path="*" element={<Navigate to="/404" />} />
            </Routes >
          </Container>
          <Footer />
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}
const mapStateToProps = state => ({
  darkMode: state.darkMode,
})
export default connect(mapStateToProps)(App);
