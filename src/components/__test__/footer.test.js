import React from 'react';
import Footer from '../footer';
import { shallow, render, mount } from 'enzyme';

describe('Footer', () => {
 
  // Ref: https://stackoverflow.com/questions/43747397/simulate-a-button-click-in-jest
  it('simulates click events', () => {
    // const mockCallBack = sinon.spy(); // sinon
    const mockCallBack = jest.fn();
    const wrapper = shallow(<button id="btnDarkMode" onClick={mockCallBack}/>);
    wrapper.find('#btnDarkMode').simulate('click');
    // expect(mockCallBack).toHaveProperty('callCount', 1); // sinon
    // expect(mockCallBack.mock.calls.length).toEqual(1);
    expect(mockCallBack).toHaveBeenCalled();
  });

})