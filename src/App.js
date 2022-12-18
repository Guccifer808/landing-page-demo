import Cards from './components/Cards';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';
import SectionOne from './components/SectionOne';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Hero />
      <SectionOne />
      <Newsletter />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
