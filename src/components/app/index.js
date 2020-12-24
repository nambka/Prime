import '../../assets/css/nav.css';
import '../../assets/css/style.css';
import Header from '../header';
import Footer from '../footer';
import PrimeForm from '../../lib/PrimeForm';
import PrimesForm from '../../lib/PrimesForm';

const App = () => {
  return (
  <div>
    <Header />
    <div className="container-fluid text-center">
      <PrimeForm />
      <PrimesForm />
    </div>
    <Footer />
  </div>
  );
};
export default App;