import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ShowTimeFilter from '../components/ShowTimeFilter';

function ShowTime() {
  return (
    <div className="App bg-[#0f172a]">
      <Header />
      <div className="mt-40 bg-[#0f172a]">
        <ShowTimeFilter />
      </div>
      <Footer/>
    </div>
  );
}

export default ShowTime;
