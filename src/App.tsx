import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import '../src/components/CSS/ResetStyles.module.css';
import '../src/components/CSS/Global.module.css';
import styles from './components/CSS/App.module.css';
import Container from './components/layouts/Container';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Company from './components/pages/Company';
import Policies from './components/pages/Policies';
import Navbar from './components/layouts/Navbar';
import Blank from './components/pages/Blank';
import Footer from './components/layouts/Footer';

function App() {

  return (
    <Router>
      <Container customClass="home" name="Container_App"> 
        <Navbar />
        <Routes >
          <Route
            path="/home" 
            element={<Home/>} 
          />
          <Route 
            path='/'
            element={<Blank />}
          />
          <Route 
            path="/company" 
            element={<Company/>} 
          />
          <Route 
            path="/contact" 
            element={<Contact/>} 
          />
          <Route 
            path="/policies" 
            element={<Policies/>} 
          />
        </Routes>
        <Footer />
      </Container>
    </Router>
  );
}

export default App;
