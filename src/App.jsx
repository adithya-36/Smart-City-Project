import React from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header/>
      <Navbar/>
      <Footer/>
    </div>
  )
}

export default App