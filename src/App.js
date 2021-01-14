import React from 'react';
import Country from './components/Country';
import Header from './components/Header';
import { useSelector } from 'react-redux';
import Loader from './components/Loader';

function App() {
  const loading = useSelector(store => store.loader.loading);
  return (
    <div className="App">
      <Header />
      {loading ? <Loader /> : <Country />}
    </div>
  );
}

export default App;
