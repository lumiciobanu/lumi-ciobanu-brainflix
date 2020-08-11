import React from 'react';
import './components/MainLeft/MainLeft.scss';
import Header from './components/Header/Header';
import Hero from '././components/Hero/Hero';
import MainLeft from '././components/MainLeft/MainLeft';
import MainAside from '././components/MainAside/MainAside';


function App() {
  return (
    <>
      <Header /> 
      <Hero />
            
            <section className="Main">     
            <MainLeft />
            <MainAside />

            </section>     

    </>
  );
}

export default App;


//all data should exist here and should it pass it down
