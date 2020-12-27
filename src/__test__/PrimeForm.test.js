import React from 'react';
import { fireEvent, render, screen } from "@testing-library/react";
import PrimeForm from '../lib/PrimeForm';
import { shallow, mount } from 'enzyme';

describe('PrimeForm: ', () => {
    beforeEach(() => {
        // const wrapper = mount(<PrimeForm />);
    });

    afterEach(() => {
        document.getElementsByTagName('html')[0].innerHTML = '';
        jest.resetModules();
        jest.resetAllMocks();
        // wrapper.unmount();
    });
    
    it('should render the form and components', () => {
        const wrapper = shallow(<PrimeForm />);
        expect(wrapper.find('form').exists()).toBe(true);
        expect(wrapper.find('#inputNumber').length).toEqual(1);
        expect(wrapper.find('#btnFindHighestPrime').length).toEqual(1);
        expect(wrapper.find('#result').length).toEqual(1);
        expect(wrapper).toMatchSnapshot();
    });

    it('has a title of "Prime Finder"', () => {
        const wrapper = shallow(<PrimeForm />);
        expect(wrapper.find("h2").text()).toBe("Highest Prime");
        expect(wrapper).toMatchSnapshot();
    });

    it('renders one form component', () => {
      const wrapper = shallow(<PrimeForm />);
      expect(wrapper.find('#frmFindHighestPrime')).toHaveLength(1);
      expect(wrapper).toMatchSnapshot();
    });


    // Ref: https://blog.logrocket.com/getting-started-with-enzyme-for-react-a106b58fc53b/
    // React 17.0.1 error: Cannot read property 'child' of undefined 
    // Enzyme adapter 16 not fully compatible with React 17 
    // => https://github.com/enzymejs/enzyme/issues/2462
    it('should change the state on input', () => {
        const wrapper = shallow(<PrimeForm />);
        wrapper.find('#inputNumber').simulate('change', { 
            target: { value: 100 } 
        });
        expect(wrapper.find("#inputNumber").props().value).toEqual(100);
    });


    //! NOT WORKING
    // it('should call handleSubmit method when submitting the form', done => {
    //     const state = { inputNum: '' };
    //     const props = {
    //         fetchData: jest.fn(() => state)
    //     };
    //     const wrapper = mount(<PrimeForm {...props}/>);
    //     const mockSubmit = {
    //       preventDefault: jest.fn()
    //     };
    //     wrapper.find('form').simulate('submit', mockSubmit);
    //     expect(wrapper.props().fetchData).toBeCalledWith(wrapper.state());
    //     expect(mockSubmit.preventDefault).toBeCalledTimes(1);
    //     done();
    // });

    //! NOT WORKING
    // it('should alert when input is a negative number', () => {
    //     let alertSpy = jest.spyOn(window, 'alert');
    //     const mockSubmit = jest.fn();
    //     const wrapper = shallow(<PrimeForm onSubmit={mockSubmit}/>);
    //     expect(wrapper.find('form')).toHaveLength(1);
    //     const props = {
    //         preventDefault: () => {},
    //         inputNum: -2,
    //     };
    //     wrapper.find('form').simulate('submit', props);
    //     expect(alertSpy).toBeCalledWith('Please input a positive integer!');
    //     // expect(mockSubmit).toBeCalledTimes(1);
    // });

    //! NOT WORKING
    // it('returns "None" when submit button clicked with input (0 or 1 or 2)', () => {
    //     const mockSubmit = jest.fn();
    //     const wrapper = shallow(<PrimeForm onSubmit={mockSubmit}/>);
        
    //     const props = {
    //         preventDefault: () => {},
    //         inputNum: 2,
    //     }
    //     wrapper.find('form').simulate('submit', props);
    //     expect(mockSubmit).toBeCalledWith({'inputNum': 2});

    //     // wrapper.find('[type="submit"]').simulate('submit');
    //     // wrapper.find('#findHighestPrime').simulate('submit'); 
    //     // wrapper.find('form').simulate('submit'); 

    //     // wrapper.find('form').simulate('submit', {
    //     //     preventDefault: () => {},
    //     //     target: { value: 2 }
    //     // });
    //     // // console.log(wrapper.debug())
    //     // expect(mockSubmit).toHaveBeenCalled();
    //     // expect(wrapper.find('#result').innerHTML).toBe('None');  
    // });




    // // with Promise
    // it('returns "None" when submit button clicked with input (0 or 1 or 2)', async () => {
    //     const promise = Promise.resolve();
    //     const mockCallBack = jest.fn(() => promise);
    //     const wrapper = mount(<PrimeForm onSubmit={mockCallBack}/>);
    //     // const fakeEvent = { preventDefault: () => console.log('preventDefault') };

    //     wrapper.find('#inputNumber').simulate('change', { 
    //         target: { value: '2' }
    //     });
    //     expect(wrapper.find("#inputNumber").props().value).toEqual('2');

    //     // wrapper.find('[type="submit"]').simulate('submit', fakeEvent);
    //     // wrapper.find('form').simulate('submit', fakeEvent); 
    //     wrapper.find('form').simulate('submit', {
    //         preventDefault: () => {},
    //     });
    //     // wrapper.update();

    //     expect(mockCallBack).toHaveBeenCalled();
    //     expect(wrapper.find('#result').innerHTML).toBe('None');  
    //     await act(() => promise);

    //     // setTimeout(() => {
    //     //     expect(mockCallBack).toHaveBeenCalled();
    //     //     expect(wrapper.find('#result').innerHTML).toBe('None');  
    //     // }, 1000);
    // });


})