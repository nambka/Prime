import React from 'react';
import '../../assets/css/nav.css';
import '../../assets/css/style.css';
import Header from '../header';
import Footer from '../footer';
import PrimeForm from '../../lib/PrimeForm';

const App = () => (
  <div>
    <Header />
    <h2>Prime Finder</h2>
    <h5>Find the Highest Prime Number lower than the Input Number</h5>
    <PrimeForm />
    <Footer />
  </div>
);
 
export default App;