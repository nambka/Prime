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
    <nav id="ac-localnav" class="js touch css-sticky ac-ln-sticking" lang="en-US" dir="ltr" role="navigation" aria-label="Local">
        <div class="ac-ln-wrapper">
            <div class="ac-ln-background"></div>
            <div class="ac-ln-content">
                <div class="ac-ln-title">
                    <a class="border-radius-50" href="/nambk"><img src={imgLogo} alt="logo" /></a>
                </div>
                <div class="ac-ln-menu">
                    <a href="/nambk" class="ac-ln-menucta-anchor ac-ln-menucta-anchor-open" id="ac-ln-menustate-open">
                        <span class="ac-ln-menucta-anchor-label">Local Nav Open Menu</span>
                    </a>
                    <a href="/nambk" class="ac-ln-menucta-anchor ac-ln-menucta-anchor-close" id="ac-ln-menustate-close">
                        <span class="ac-ln-menucta-anchor-label">Local Nav Close Menu</span>
                    </a>
                    <div class="ac-ln-menu-tray">
                        <ul class="ac-ln-menu-items">
                            <li class="ac-ln-menu-item">
                                <span class="ac-ln-menu-link current" role="link" aria-disabled="true" aria-current="page">Home</span>
                            </li>
                            <li class="ac-ln-menu-item">
                                <a href="/nambk" class="ac-ln-menu-link">Design</a>
                            </li>
                            <li class="ac-ln-menu-item">
                                <a href="/nambk" class="ac-ln-menu-link">Products</a>
                            </li>
                        </ul>
                    </div>
                    <div class="ac-ln-actions">
                        <div class="ac-ln-action ac-ln-action-menucta" aria-hidden="true">
                            <label for="ac-ln-menustate" class="ac-ln-menucta">
                                <span class="ac-ln-menucta-chevron"></span>
                            </label>
                        </div>
                        <div class="ac-ln-action ac-ln-action-button">
                            <a class="ac-ln-button" href="/nambk">Login <span class="ac-ln-action-product"></span></a>
                        </div>
                        <button onClick={toggleTheme}>Toggle Theme</button>
                    </div>
                </div>
            </div>
        </div>
    </nav> 
  </ThemeProvider> 
  );
};
export default Header;