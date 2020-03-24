import React from 'react';

import Header from "../components/Header.jsx"
import Banner from "../components/Banner.jsx"
import Page from "./Page"
import Footer from "../components/Footer"


function App() {
  return (
    <div className="App">
      <Header/>
      <Banner />
      <Page />
      <Footer />
    </div>
  );
}

export default App;
