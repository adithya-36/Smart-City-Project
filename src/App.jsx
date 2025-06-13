import React from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomeItem1 from './components/HomeItem1'
import HomeItem2 from './components/HomeItem2'
import HomeItem3 from './components/HomeItem3'
import HomeItem4 from './components/HomeItem4'
import ProjectsDisplay from './components/ProjectsDisplay'
import TestimonialsSection from './components/TestimonialsSection'

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header/>
      <Navbar/>
      <main className="flex-grow">
        <HomeItem1 />
        <HomeItem4 />   
        <HomeItem2/>
        <HomeItem3/>
        <ProjectsDisplay/>
        <TestimonialsSection/>
      </main> 
      <Footer/>
    </div>
  )
}

export default App