import React from 'react';
import Header from '../components/header';
import { shallow, mount } from 'enzyme';

describe('Header: ', () => {
  beforeEach(() => {
    // const wrapper = mount(<Header />);
  });

  afterEach(() => {
    document.getElementsByTagName('html')[0].innerHTML = '';
    jest.resetModules();
    // wrapper.unmount();
  });

  it('renders items without errors', () => {
      const wrapper = shallow(<Header />);
      expect(wrapper.find('nav').length).toEqual(1);
      expect(wrapper.find('#btnDarkMode').length).toEqual(1);
      expect(wrapper).toMatchSnapshot();
    })

  // Ref: https://thomlom.dev/beginner-guide-testing-react-apps/
  it('simulates DarkMode button click events', () => {
    const setTheme = jest.fn();
    const useStateSpy = jest.spyOn(React, "useState");
    useStateSpy.mockImplementation((initialValue) => [initialValue, setTheme]);
    const wrapper = shallow(<Header />);

    // wrapper.find("button").last().props().onClick();
    // wrapper.find("button").first().props().onClick();    
    wrapper.find("button").props().onClick();
    expect(setTheme).toHaveBeenCalledTimes(1);
    expect(setTheme).toHaveBeenCalledWith('dark');
  });
  
  // Ref: https://stackoverflow.com/questions/43747397/simulate-a-button-click-in-jest
  // it('simulates click event', () => {
  //   // const mockCallBack = sinon.spy(); // sinon
  //   const mockCallBack = jest.fn();
  //   const wrapper = shallow(<Header onClick={mockCallBack}/>);
  //   wrapper.find('button').simulate('click');
  //   // expect(mockCallBack).toHaveProperty('callCount', 1); // sinon
  //   // expect(mockCallBack.mock.calls.length).toEqual(1);
  //   // expect(mockCallBack).toHaveBeenCalled();
  //   expect(mockCallBack).toHaveBeenCalledTimes(1);
  // });

})