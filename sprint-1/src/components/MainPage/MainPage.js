import React from 'react';
import Hero from '../Hero/Hero';
import MainLeft from '../MainLeft/MainLeft';
import MainLeftComments from '../MainLeftComments/MainLeftComments';
import MainAside from '../MainAside/MainAside';


function MainPage() {
    return (
      <>
        <Hero />
        <MainLeft />
        <MainLeftComments />
        <MainAside />
         
      </>
    );
  }
  
  export default MainPage;