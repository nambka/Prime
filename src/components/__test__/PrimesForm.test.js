import React from 'react';
import PrimesForm from '../../lib/PrimesForm';
import { shallow, render, mount } from 'enzyme';

describe('PrimesForm: ', () => {
    it('should render the form and components', () => {
        const wrapper = shallow(<PrimesForm />);
        expect(wrapper.find('form').exists()).toBe(true);
        expect(wrapper.find('#inputFirstNum').length).toEqual(1);
        expect(wrapper.find('#inputLastNum').length).toEqual(1);
        expect(wrapper.find('#btnFindPrimes').length).toEqual(1);
        expect(wrapper.find('#result').length).toEqual(1);
    })

    it('has a title of "Prime Numbers"', () => {
        const wrapper = shallow(<PrimesForm />);
        expect(wrapper.find("h2").text()).toBe("Prime Numbers");
    });

    it('renders one form component', () => {
      const wrapper = shallow(<PrimesForm />);
      expect(wrapper.find('#frmFindPrimes')).toHaveLength(1);
    });


    // Test for changing input value NOT WORKING:
    // Ref: https://github.com/enzymejs/enzyme/issues/364
    // Ref: https://github.com/enzymejs/enzyme/issues/76
    // it('should change the state on input1', () => {
    //     const wrapper = mount(<PrimesForm />);
    //     const input = wrapper.find('input').at(0);

    //     input.instance().value = 100;
    //     // input.simulate('change', { target: { value: 100 }});
    //     // input.simulate('change', input);
    //     // input.getDOMNode().value = 100;
    //     // input.simulate('change');
    //     // input.props().onChange({target: {value: 100}});

    //     // expect(input.props().value).toEqual(100);
    //     // expect(input.props()).toEqual(100);
    //     // expect(input.prop('value')).toEqual(100);
    //     expect(input.props().value).toEqual(100);
    // });
    

    // it('should change the state on input2', () => {
    //     const wrapper = mount(<PrimesForm />);
    //     const input = wrapper.find('input').at(1);

    //     // input.instance().value = 100;
    //     input.simulate('change', { target: { value: 100 }});
        
    //     // expect(input.props().value).toEqual(100);
    //     // expect(input.props()).toEqual(100);
    //     // expect(input.prop('value')).toEqual(100);
    //     expect(input.props().value).toEqual(100);
    // });


    // it('returns prime numbers when submit button clicked with inputs (1 & 10)', () => {
    //     const testValues = {
    //         inputFirstNum: '1',
    //         inputLastNum: '10',
    //         handleSubmit: jest.fn(),
    //     };
    //     const component = shallow(
    //         <PrimesForm {...testValues} />
    //     );
    //     component.find('#btnFindPrimes').simulate('click');
    //     expect(testValues.handleSubmit).toHaveBeenCalledTimes(1);
    //     expect(testValues.handleSubmit).toBeCalledWith({
    //         inputFirstNum: testValues.inputFirstNum, 
    //         inputLastNum: testValues.inputLastNum
    //     });
    // });

})