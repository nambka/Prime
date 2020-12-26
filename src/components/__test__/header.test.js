import React from 'react';
import Header from '../header';
import { shallow, mount } from 'enzyme';

describe('Header: ', () => {

  // Ref: https://stackoverflow.com/questions/43747397/simulate-a-button-click-in-jest
  // it('simulates click events', () => {
  //   // const mockCallBack = sinon.spy(); // sinon
  //   const mockCallBack = jest.fn();
  //   const wrapper = mount(<Header onClick={mockCallBack}/>);
  //   wrapper.find('#btnDarkMode').simulate('click');
  //   // expect(mockCallBack).toHaveProperty('callCount', 1); // sinon
  //   // expect(mockCallBack.mock.calls.length).toEqual(1);
  //   expect(mockCallBack).toHaveBeenCalled();
  // });

  // Ref: https://thomlom.dev/beginner-guide-testing-react-apps/
  it('DarkMode button click events', () => {
    const setTheme = jest.fn();
    const useStateSpy = jest.spyOn(React, "useState");
    useStateSpy.mockImplementation((initialValue) => [initialValue, setTheme]);
    const wrapper = mount(<Header />);

    // wrapper.find("button").last().props().onClick();
    // wrapper.find("button").first().props().onClick();    
    wrapper.find("button").props().onClick();
    expect(setTheme).toHaveBeenCalledTimes(1);
    expect(setTheme).toHaveBeenCalledWith('dark');
  });

})