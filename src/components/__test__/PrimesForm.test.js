import React from 'react';
import PrimesForm from '../../lib/PrimesForm';
import { shallow, mount } from 'enzyme';

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


    it('should change the state on input1: call handleChange method', done => {
        const text = '1'
        const state = { inputFirstNum: text };
        const props = {
            fetchData: jest.fn(() => state)
        };
        const wrapper = mount(<PrimesForm {...props}/>);
        const input = wrapper.find('#inputFirstNum');
    
        input.props().value = text;
        input.simulate('change', { target: { value: text } });
        expect(input.get(0).props.value).toEqual(text);
        done();
    });


    it('should change the state on input2: call handleChange method', done => {
        const text = '1000'
        const state = { inputLastNum: text };
        const props = {
            fetchData: jest.fn(() => state)
        };
        const wrapper = mount(<PrimesForm {...props}/>);
        const input = wrapper.find('#inputLastNum');
    
        input.props().value = text;
        input.simulate('change', { target: { value: text } });
        expect(input.get(0).props.value).toEqual(text);
        done();
    });


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