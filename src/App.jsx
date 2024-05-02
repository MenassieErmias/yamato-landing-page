import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Specialization from './components/Specialization'
import PartnersAndCustomers from './components/PartnersAndCustomers'
import Blog from './components/Blog'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='app'>
      <main className="main">
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
