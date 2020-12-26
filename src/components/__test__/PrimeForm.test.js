import React from 'react';
import PrimeForm from '../../lib/PrimeForm';
import { shallow, render, mount } from 'enzyme';

describe('PrimeForm: ', () => {
    it('should render the form and components', () => {
        const wrapper = shallow(<PrimeForm />);
        expect(wrapper.find('form').exists()).toBe(true);
        expect(wrapper.find('#inputNumber').length).toEqual(1);
        expect(wrapper.find('#btnFindHighestPrime').length).toEqual(1);
        expect(wrapper.find('#result').length).toEqual(1);
    })

    it('has a title of "Prime Finder"', () => {
        const wrapper = shallow(<PrimeForm />);
        expect(wrapper.find("h2").text()).toBe("Prime Finder");
    });

    it('renders one form component', () => {
      const wrapper = shallow(<PrimeForm />);
      expect(wrapper.find('#frmFindHighestPrime')).toHaveLength(1);
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


    // test('returns "NaN" when submit button clicked with empty input', () => {

    // });


    it('returns "None" when submit button clicked with input (0 or 1 or 2)', () => {
        const mockCallBack = jest.fn();
        const wrapper = mount(<PrimeForm onSubmit={mockCallBack}/>);
        
        wrapper.find('input').first().simulate('change', { 
            target: { value: 2 } 
        });

        // wrapper.find('[type="submit"]').simulate('submit');
        // wrapper.find('#findHighestPrime').simulate('submit'); 
        // wrapper.find('form').simulate('submit'); 
        wrapper.find('form').simulate('submit', {
            preventDefault: () => {},
            target: { value: 20 }
        });
        
        expect(mockCallBack).toHaveBeenCalled();
        expect(wrapper.find('#result').innerHTML).toBe('None');    
    });




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