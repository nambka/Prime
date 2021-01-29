import { useState, useEffect } from 'react';

// Credits: 
// https://css-tricks.com/a-dark-mode-toggle-with-react-and-themeprovider/
// https://stackoverflow.com/questions/64131689/changing-the-theme-color-value-from-user-input-on-button-click-using-themeprovid
export const useDarkMode = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
    const toggleTheme = () => {
      // theme === 'light' ? setTheme('dark') : setTheme('light')
      if (theme === 'light') {
        localStorage.setItem('theme', 'dark');
        setTheme('dark');
      } else if (theme === 'dark') {
        localStorage.setItem('theme', 'moon');
        setTheme('moon');
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