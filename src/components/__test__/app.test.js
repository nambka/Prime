import React from 'react';
import App from '../app';
import Header from '../header';
import Footer from '../header';
import PrimeForm from '../../lib/PrimeForm';
import PrimesForm from '../../lib/PrimesForm';
import { shallow, render, mount } from 'enzyme';

describe('App:', () => {
  it('renders one <Header /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Header)).toHaveLength(1);
  });

  it('renders one <PrimeForm /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(PrimeForm)).toHaveLength(1);
  });

  it('renders one <PrimesForm /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(PrimesForm)).toHaveLength(1);
  });
  
  it('renders one <Footer /> component', () => {
    const wrapper = shallow(<App />);
    // expect(wrapper.find(Foo)).to.have.length(3); // for Chai Assertion Library
    // expect(wrapper.find(Foo).length).toBe(1); // for Enzyme
    expect(wrapper.find(Footer)).toHaveLength(1); // for Jest
  });

});