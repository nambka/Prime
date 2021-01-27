import React from 'react';
import renderer from 'react-test-renderer';
import GlobalStyle from '../service/theme/global';
import themes from '../service/theme';

describe('GlobalStyle: ', () => {
  it('renders with a LIGHT theme', () => {
    renderer.create(<GlobalStyle theme={themes.lightTheme} />);
    expect(document.head).toMatchSnapshot();
  });
  it('renders with a DARK theme', () => {
    renderer.create(<GlobalStyle theme={themes.darkTheme} />);
    expect(document.head).toMatchSnapshot();
  });
  it('renders with a MOON theme', () => {
    renderer.create(<GlobalStyle theme={themes.moonTheme} />);
    expect(document.head).toMatchSnapshot();
  });

})