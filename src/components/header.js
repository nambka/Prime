import React from 'react';
import imgLogo from '../assets/images/logo.png';

import { ThemeProvider } from 'styled-components';
import themes, {useDarkMode} from '../service/theme';
import GlobalStyles from './global';

const Header = () => {
  const [theme, toggleTheme] = useDarkMode();
  return (
  <ThemeProvider theme={theme === 'light' ? themes.lightTheme : themes.darkTheme}>
    <GlobalStyles />
    <nav id="ac-localnav" className="js touch css-sticky ac-ln-sticking" lang="en-US" dir="ltr" role="navigation" aria-label="Local">
        <div className="ac-ln-wrapper">
            <div className="ac-ln-background"></div>
            <div className="ac-ln-content">
                <div className="ac-ln-title">
                    <a className="border-radius-50" href="/nambk"><img src={imgLogo} alt="logo" /></a>
                </div>
                <div className="ac-ln-menu">
                    <a href="/nambk" className="ac-ln-menucta-anchor ac-ln-menucta-anchor-open" id="ac-ln-menustate-open">
                        <span className="ac-ln-menucta-anchor-label">Local Nav Open Menu</span>
                    </a>
                    <a href="/nambk" className="ac-ln-menucta-anchor ac-ln-menucta-anchor-close" id="ac-ln-menustate-close">
                        <span className="ac-ln-menucta-anchor-label">Local Nav Close Menu</span>
                    </a>
                    <div className="ac-ln-menu-tray">
                        <ul className="ac-ln-menu-items">
                            <li className="ac-ln-menu-item">
                                <span className="ac-ln-menu-link current" role="link" aria-disabled="true" aria-current="page">Home</span>
                            </li>
                            <li className="ac-ln-menu-item">
                                <a href="/nambk" className="ac-ln-menu-link">Design</a>
                            </li>
                            <li className="ac-ln-menu-item">
                                <a href="/nambk" className="ac-ln-menu-link">Products</a>
                            </li>
                        </ul>
                    </div>
                    <div className="ac-ln-actions">
                        <div className="ac-ln-action ac-ln-action-menucta" aria-hidden="true">
                            <label htmlFor="ac-ln-menustate" className="ac-ln-menucta">
                                <span className="ac-ln-menucta-chevron"></span>
                            </label>
                        </div>
                        <div className="ac-ln-action ac-ln-action-button">
                            <a className="ac-ln-button" href="/nambk">Login </a>
                            <a className="ac-ln-button" onClick={toggleTheme}><i className="fa fa-moon"></i></a>
                            <a className="btn btn-sm btn-icon btn-soft-light" onClick={toggleTheme}><i className="fa fa-sun-o"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav> 
  </ThemeProvider> 
  );
};
export default Header;