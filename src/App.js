import { useState } from 'react';
import './index.css';
import Tours from './Tours';
import useFetch from './useFetch';

function App() {
  const {loading ,data,error,setData}=useFetch('http://localhost:8000/tours')
  const deleteTour = (id) => {
    setData(data.filter((tour)=>tour.id!=id))
  }
  return (
    <div>
      {loading && <h3 className="title">{loading}</h3>}
      {data && <Tours tours={data} deleteTour={deleteTour}></Tours>}
      {error && <h3>{error}</h3>}
    </div>
  )
}

export default App;
