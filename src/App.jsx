import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Specialization from './components/Specialization';
import PartnersAndCustomers from './components/PartnersAndCustomers';
import Blog from './components/Blog';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='app bg-gradient-to-b from-[#1CA5B5] to-[#141C4B] text-gray-300 min-h-screen'>
      <main className="main flex flex-col items-center">
        <Header />
        <Hero />
        <Specialization />
        <PartnersAndCustomers />
        <Blog />
        <Footer />
      </main>
    </div>
  )
}

export default App
