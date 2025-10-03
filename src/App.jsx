import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import TechnicalProficiency from './components/TechnicalProficiency'
import Education from './components/Education'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Projectsmobile from './components/Projectsmobile'
import Techicons from './components/Techicons'
import Contact from './components/Contact'

const App = () => {
  
  
  return (
    <div className='min-h-screen bg-neutral-100 dark:bg-neutral-950 relative transition-colors duration-300 isolate' >
      <div className='absolute inset-0 -z-10 dark:hidden'>
        <div className='absolute inset-0 opacity-30' style={{backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px)', backgroundSize: '40px 40px',}}></div>
      </div>
      <div className='absolute inset-0 -z-10'>
        <div className='absolute inset-0 dark:hidden' style={{backgroundImage: 'radial-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px', backgroundSize: '20px 20px',}}></div>
      </div>
        <Header />
        <Hero />
        <TechnicalProficiency/>
        <About />
        <Education/>
        <Experience/>
        <div className='max-md:hidden'><Projects/></div>
        <Projectsmobile/>
        <Techicons/>
        <Contact/>
        </div>
        
  )
}

export default App