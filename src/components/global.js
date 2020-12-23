import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import themes from '../service/theme'

const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    align-items: center;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    margin: 0;
    padding: 0;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
  }
`  
export default GlobalStyles;




export const ButtonWrapper = styled.div`
  .btn {
    /* Sử dụng fontWeightBold, fontSizeMedium , borderRadiusMedium từ _variables.js */
    font-weight: ${themes.fontWeightBold};
    font-size: ${themes.fontSizeMedium};
    line-height: 1.5;
    border-radius: ${themes.borderRadiusLarge};
    padding: .375rem .75rem;
  }

  .btn-primary {
    /* Sử dụng blue, white từ _variables.js */
    background: ${themes.blue};
    color: ${themes.white};
    /* Sử dụng transitionFade từ _mixin.js */
    ${themes.transitionFade()}
  }

  .btn-secondary {
    background: ${themes.grey};
    color: ${themes.white};
    ${themes.transitionFade()}
  }
`