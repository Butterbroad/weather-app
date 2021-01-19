import React from 'react';
import { AppStyled, AppWrapperStyled } from './App.styled';
import Country from './components/Country';
import Header from './components/Header';
import { useSelector } from 'react-redux';
import Loader from './components/Loader';
import ErrorModal from './components/ErrorModal';

function App() {
  const loading = useSelector(store => store.loader.loading);
  const isError = useSelector(store => store.error.error);
  const country = useSelector(store => store.country.country);

  return (
    <AppStyled>
      <Header />
      <AppWrapperStyled>
        {loading ? <Loader /> : country && !isError && <Country />}
        {isError && <ErrorModal />}
      </AppWrapperStyled>
    </AppStyled>
  );
}

export default App;
