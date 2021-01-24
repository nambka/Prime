import React from 'react';
import Header from '../components/Header';
import { shallow, mount } from 'enzyme';

describe('Header: ', () => {
  beforeEach(() => {
    // const wrapper = mount(<Header />);
  });

  afterEach(() => {
    jest.resetModules();
    // wrapper.unmount();
  });

  it('renders items without errors', () => {
      const wrapper = shallow(<Header />);
      expect(wrapper.find('nav').length).toEqual(1);
      expect(wrapper).toMatchSnapshot();
    })

})