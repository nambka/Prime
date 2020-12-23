import '../../assets/css/nav.css';
import '../../assets/css/style.css';
import '../../assets/css/theme.css';
import Header from '../header';
import Footer from '../footer';
import PrimeForm from '../../lib/PrimeForm';

import { ThemeProvider } from 'styled-components';
import themes from '../../service/theme';
import GlobalStyles from '../global';

const App = () => {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }
  
  return (
  <div>
    <ThemeProvider theme={theme === 'light' ? themes.lightTheme : themes.darkTheme}>
      <Header />
      <h2>Prime Finder</h2>
      <h5>Find the Highest Prime Number lower than the Input Number</h5>
      <PrimeForm />

      <GlobalStyles />
      <button onClick={toggleTheme}>Toggle Theme</button>

      <Footer />
    </ThemeProvider>
  </div>
  );
};
export default App;