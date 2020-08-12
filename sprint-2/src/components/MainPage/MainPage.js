import React from 'react';
import Hero from '../Hero/Hero';
import MainLeft from '../MainLeft/MainLeft';
import MainAside from '../MainAside/MainAside';
import './MainPage.scss';

function MainPage() {
    return (
        <>
            <Hero />

            <section className="Main">
                <MainLeft />
                <MainAside />

            </section>
        </>
    );
}



export default MainPage;
