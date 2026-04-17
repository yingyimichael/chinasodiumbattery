import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <Navbar />
      <main className="flex-grow">
        <h1 className="text-4xl text-center mt-10">Welcome to China Sodium Battery</h1>
        <p className="text-center mt-5">Innovating battery technology for a sustainable future.</p>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
