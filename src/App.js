import React, { Component }  from 'react';
import './App.css';

import SearchBar from './components/searchBar/SearchBar';
import Layout from './layout/Layout';
function App() {
  return (
    <>
    <Layout>
    <SearchBar />
    </Layout>
    </>
  );
}

export default App;
