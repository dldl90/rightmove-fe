import React, { useState, useEffect } from 'react';
import './App.scss';
import Header from '../Header';
import SortAndFilter from '../SortAndFilter';
import PropertyListing from '../PropertyListing';

const App = () => {
  const [properties, setProperties] = useState([]);

  const fetchData = async () => {
    const PROPERTY_URL = 'http://localhost:4000/api/properties'
    try {
      const result = await fetch(PROPERTY_URL).then(res => res.json());
      const propertiesResult = result.slice(0, 5);
      setProperties(propertiesResult);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className="App">
      <Header />
      <main>
        <SortAndFilter />
        <PropertyListing properties={properties} />
      </main>
    </div>
  );
};

export default App;
