import React from 'react';
import App from '../components/App';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PrimeForm from '../lib/PrimeForm';
import PrimesForm from '../lib/PrimesForm';
import { shallow } from 'enzyme';

describe('App:', () => {
  it('renders components without errors', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Header)).toHaveLength(1);
    expect(wrapper.find('.container-fluid')).toHaveLength(1);
    expect(wrapper.find(PrimeForm)).toHaveLength(1);
    expect(wrapper.find(PrimesForm)).toHaveLength(1);
    expect(wrapper.find(Footer)).toHaveLength(1); 
    expect(wrapper).toMatchSnapshot();
    // console.log(wrapper.debug());
  });

  // https://medium.com/@acesmndr/testing-react-functional-components-with-hooks-using-enzyme-f732124d320a
  it('changes props when executing by calling them as functions with passed param 1', () => {
    const wrapper = shallow(<App />); 
    wrapper.find('Footer').prop('toggleTheme')({
      target: {
        theme: 'light'
      }
    });
    expect(wrapper.find('Footer').prop('theme')).toEqual('dark');
  });

  it('changes props when executing by calling them as functions with passed param 2', () => {
    const wrapper = shallow(<App />); 
    wrapper.find('Footer').prop('toggleTheme')({
      target: {
        theme: 'dark'
      }
    });
    expect(wrapper.find('Footer').prop('theme')).toEqual('moon');
  });

  it('changes props when executing by calling them as functions with passed param 3', () => {
    const wrapper = shallow(<App />); 
    wrapper.find('Footer').prop('toggleTheme')({
      target: {
        theme: 'moon'
      }
    });
    expect(wrapper.find('Footer').prop('theme')).toEqual('light');
  });

});