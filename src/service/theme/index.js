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
    bodyBkg: '#F7F8F9',
    bodyTextColor: '#353637',
    footerBkg: 'linear-gradient(150deg,#19a0ff,#2d1582)',
    footerTextColor: '#fff',
    gradient: 'linear-gradient(#39598A, #79D7ED)',
    formBkg: '#fff',
    formBoxShadow: '0 2px 2px 0 rgba(0,0,0,.05)',
    formTransition: '.3s all ease',
    formBkgHover: '#fff',
    formBoxShadowHover: '0 5px 10px 0 rgba(0,0,0,.1)',
    formTransitionHover: '.2s all ease',
  },
  darkTheme: {
    bodyBkg: '#01263f',
    bodyTextColor: '#a2b9c8',
    footerBkg: '#012137',
    footerTextColor: '#a2b9c8',
    gradient: 'linear-gradient(#091236, #1E215D)',
    formBkg: '#012137 !important',
    formBoxShadow: '0 2px 2px 0 rgba(0,0,0,0.1)',
    formTransition: '.3s all ease',
    formBkgHover: '#dadada11!important',
    formBoxShadowHover: '2px 5px 10px 0 rgba(0,0,0,.3)',
    formTransitionHover: '.2s all ease',
  }
};
export default themes;