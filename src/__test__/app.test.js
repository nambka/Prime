import React from 'react';
import App from '../components/app';
import Header from '../components/header';
import Footer from '../components/header';
import PrimeForm from '../lib/PrimeForm';
import PrimesForm from '../lib/PrimesForm';
import { shallow, mount } from 'enzyme';
import TestRenderer from 'react-test-renderer';

describe('App:', () => {
  it('renders components without errors', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Header)).toHaveLength(1);
    expect(wrapper.find('.container-fluid')).toHaveLength(1);
    expect(wrapper.find(PrimeForm)).toHaveLength(1);
    expect(wrapper.find(PrimesForm)).toHaveLength(1);
    expect(wrapper.find(Footer)).toHaveLength(1); // for Jest
    // expect(wrapper.find(Foo)).to.have.length(3); // for Chai Assertion Library
    // expect(wrapper.find(Foo).length).toBe(1); // for Enzyme
    expect(wrapper).toMatchSnapshot();
    // console.log(wrapper.debug());
  });

  it('snapshot renders', () => {
    const component = TestRenderer.create(<App />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

});