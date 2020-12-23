import _mixins from './abstracts/_mixins'
import _variables from './abstracts/_variables'
import { useState, useEffect } from 'react';

export const useDarkMode = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
    const toggleTheme = () => {
      // theme === 'light' ? setTheme('dark') : setTheme('light')
      if (theme === 'light') {
        localStorage.setItem('theme', 'dark');
        setTheme('dark');
      } else {
        localStorage.setItem('theme', 'light');
        setTheme('light');
      }
    };

    useEffect(() => {
      const localTheme = window.localStorage.getItem('theme');
      localTheme && setTheme(localTheme);
    }, []);
    
    return [theme, toggleTheme];
};

const themes = {
  ..._mixins,
  ..._variables,
  lightTheme: {
    body: '#E2E2E2',
    text: '#363537',
    toggleBorder: '#FFF',
    gradient: 'linear-gradient(#39598A, #79D7ED)',
  },
  darkTheme: {
    body: '#363537',
    text: '#FAFAFA',
    toggleBorder: '#6B8096',
    gradient: 'linear-gradient(#091236, #1E215D)',
  }
};
export default themes;

// // Reference: https://css-tricks.com/a-dark-mode-toggle-with-react-and-themeprovider/
// export const lightTheme = {
//   body: '#E2E2E2',
//   text: '#363537',
//   toggleBorder: '#FFF',
//   gradient: 'linear-gradient(#39598A, #79D7ED)',
// }

// export const darkTheme = {
//   body: '#363537',
//   text: '#FAFAFA',
//   toggleBorder: '#6B8096',
//   gradient: 'linear-gradient(#091236, #1E215D)',
// }