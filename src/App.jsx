import "./App.css";
import React from "react";
import Header from "./components/Header";

import Countries from "./components/Countries";
import CountryDetail from './components/CountryDetail'
import { Route, Routes } from "react-router-dom";

function App() {
  const [countries, setCountries] = React.useState([]);

  return (
    <>
      <Header />
          
    
      <Routes>
        <Route
          path="/"
          element={
            <Countries countries={countries} setCountries={setCountries} />
          }
        />{" "}
        <Route path="/:name"  element={<CountryDetail />}/>
      </Routes>

    </>
  );
}

export default App;
