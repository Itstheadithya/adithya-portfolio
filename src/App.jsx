import './App.css';
import Footer from './sections/Footer/Footer';
import Contacts from './sections/Contacts/Contacts';
import Skills from './sections/Skills/Skills';
import Projects from './sections/Projects/Projects'
import Certificates from './sections/Certificates/Certificates';
import Header from './sections/Header/Header';
import Hero from './sections/Hero/Hero'

function App() {
   return(
      <>
         <Header/>
         <Hero/>
         <Certificates/>
         <Projects/>
         <Skills/>
         <Contacts/>
         <Footer/>
      </>
   );
}

export default App
