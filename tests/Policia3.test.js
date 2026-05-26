import React from 'react';
import { shallow } from 'enzyme';
import Policia3 from './Policia3';

describe('Policia3 component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Policia3 />);
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('renders all form elements', () => {
    expect(wrapper.find('h1').text()).toEqual('Vërtetimi i të kaluarës kriminale');
    expect(wrapper.find('input[name="personalNumber"]').exists()).toBeTruthy();
    expect(wrapper.find('input[name="fullName"]').exists()).toBeTruthy();
    expect(wrapper.find('input[name="city"]').exists()).toBeTruthy();
    expect(wrapper.find('input[name="phone"]').exists()).toBeTruthy();
    expect(wrapper.find('input[name="email"]').exists()).toBeTruthy();
    expect(wrapper.find('select[name="rez"]').exists()).toBeTruthy();
    expect(wrapper.find('select[name="station"]').exists()).toBeTruthy();
    expect(wrapper.find('select[name="reason"]').exists()).toBeTruthy();
    expect(wrapper.find('input[name="deklarata"]').exists()).toBeTruthy();
    expect(wrapper.find('button[type="submit"]').exists()).toBeTruthy();
  });

  it('updates state on input change', () => {
    const input = wrapper.find('input[name="personalNumber"]');
    input.simulate('change', { target: { name: 'personalNumber', value: '12345' } });
    expect(wrapper.state('personalNumber')).toEqual('12345');
  });

  it('calls handleSubmit on form submission', () => {
    const handleSubmitMock = jest.fn();
    wrapper.instance().handleSubmit = handleSubmitMock;
    wrapper.find('form').simulate('submit', { preventDefault() {} });
    expect(handleSubmitMock).toHaveBeenCalled();
  });
});
