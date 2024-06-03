import React from 'react';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import '../styles/Home.css';

const Home = () => {
    return (
        <div className="app-container">
            <NavBar />
            <div className="content-wrap">
                <Header />
            </div>
            <Footer />
        </div>
    );
};

export default Home;