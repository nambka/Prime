import React from 'react';
import imgWorldMap from '../assets/images/world-map-white.png';
import imgSnapSeed from '../assets/images/snapseed256.png';

import { ThemeProvider } from 'styled-components';
import themes, {useDarkMode} from '../service/theme';
import GlobalStyles from './global';

const Footer = () => {
  const [theme, toggleTheme] = useDarkMode();
  return (
  <ThemeProvider theme={theme === 'light' ? themes.lightTheme : themes.darkTheme}>
    <GlobalStyles />
    <footer class="gradient-half-primary-body-v1 py-4">
        <div class="container">
            <div class="row justify-content-md-between font-size-1 py-3" 
                style={{
                    // backgroundImage: "url(" + imgWorldMap + ")",
                    backgroundImage: `url(${imgWorldMap})`,
                    backgroundRepeat: 'no-repeat',
                    // backgroundSize: 'cover',
                    backgroundPositionX: '0px',
                    backgroundPositionY: '30%'
                }}>
                <div class="col-lg-3 mb-4 mb-lg-0">
                    <div class="d-flex h-100 flex-column">
                        <div class="d-flex align-items-center mb-4">
                            <img src={imgSnapSeed} width="32" alt="Landing Page Logo"/>
                            <span class="h4 text-white mb-0 ml-3">Powered by Nambk</span>
                        </div>
                        <p class="text-white">A brand new journey to the beautiful angles of this world. Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>

                        <div class="d-flex align-items-center">
                            <a class="btn btn-xss btn-soft-light mr-2" href="/settings">
                                <i class="fa fa-cogs mr-1"></i>Preferences
                            </a>
                            <button onClick={toggleTheme}>Toggle Theme</button>
                            <button id="darkModaBtn" type="button" data-toggle="tooltip" data-title="Day/Night Mode" class="btn btn-sm btn-icon btn-soft-light" data-original-title="" title="">
                                <i id="darkModaBtnIcon" class="fa fa-moon"></i></button>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    </footer> 
  </ThemeProvider> 
);
};

export default Footer;