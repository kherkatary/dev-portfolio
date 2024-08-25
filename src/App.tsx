import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { ParallaxProvider } from 'react-scroll-parallax';
import './App.css'
import { About, Education, Footer, Hero, Navbar, Projects, Resume, Skills, } from './Components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Navbar/> */}
    <ParallaxProvider>
        
      <Hero/>
      <About/>
      <Skills/>
      <Education/>
      <Projects/>
      <Resume/>
      <Footer/>
       
      </ParallaxProvider>
    </>
  )
}

export default App
