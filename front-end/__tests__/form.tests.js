import React from 'react';
import { shallow } from 'enzyme';
import Form from '../src/components/form';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('#form', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Form />);
  })

  it('renders a text box', () => {
    expect(wrapper.find('input').length).toEqual(1);
  });

  it('renders a submit button', () => {
    expect(wrapper.find('button').length).toEqual(1)
  })

});
