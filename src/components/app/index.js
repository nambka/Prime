import '../../assets/css/nav.css';
import '../../assets/css/style.css';
import Header from '../header';
import Footer from '../footer';
import PrimeForm from '../../lib/PrimeForm';

const App = () => {
  return (
  <div>
    <Header />
    <div className="container-fluid text-center">
      <PrimeForm />
      <PrimeForm />
    </div>
    <Footer />
  </div>
  );
};
export default App;