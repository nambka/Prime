import React from 'react';
import '../assets/css/nav.css';
import '../assets/css/style.css';
import Header from './Header';
import Footer from './Footer';
import PrimeForm from '../lib/PrimeForm';
import PrimesForm from '../lib/PrimesForm';

import { ThemeProvider } from 'styled-components';
import themes from '../service/theme';
import { useDarkMode } from '../lib/DarkMode';
import GlobalStyle from '../service/theme/global';

const App = () => {
  const [theme, toggleTheme] = useDarkMode();

  return (
    <ThemeProvider theme={theme === 'light' ? themes.lightTheme : (theme === 'dark' ? themes.darkTheme : themes.moonTheme)}>
      <GlobalStyle />
      <Header />
      <main className="container-fluid text-center">
        <PrimeForm />
        <PrimesForm />
      </main>
      <Footer theme={theme} toggleTheme={toggleTheme}/>
    </ThemeProvider> 
  );
};
export default App;