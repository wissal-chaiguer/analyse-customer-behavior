import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Section01 from '../components/Section01';
import Section02 from '../components/Section02';
import Section03 from '../components/Section03';
import Footer from '../components/Footer';


const Home = () => {
    window.scrollTo(0, 0);
    return(
        <>
            <Hero/>
            <Section01/>
            <Section02/>
            <Section03/>
      </>
    )

}

export default Home;
