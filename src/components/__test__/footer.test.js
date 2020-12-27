import React from 'react';
import Footer from '../footer';
import { shallow, mount } from 'enzyme';

describe('Footer', () => {
  beforeEach(() => {
    // const wrapper = mount(<Footer />);
  });

  afterEach(() => {
    document.getElementsByTagName('html')[0].innerHTML = '';
    jest.resetModules();
    // wrapper.unmount();
  });

  it('renders nav items without errors', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find('div.container').length).toEqual(1);
    expect(wrapper.find('span.h5').length).toEqual(1);
    expect(wrapper.find('#btnDarkMode').length).toEqual(1);
  })

  // Ref: https://stackoverflow.com/questions/43747397/simulate-a-button-click-in-jest
  it('simulates button click events', () => {
    // const mockCallBack = sinon.spy(); // sinon
    const mockCallBack = jest.fn();
    const wrapper = shallow(<button id="btnDarkMode" onClick={mockCallBack}/>);
    wrapper.find('#btnDarkMode').simulate('click');
    // expect(mockCallBack).toHaveProperty('callCount', 1); // sinon
    // expect(mockCallBack.mock.calls.length).toEqual(1);
    expect(mockCallBack).toHaveBeenCalled();
  });

})