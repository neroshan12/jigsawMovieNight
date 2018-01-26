import React from 'react';
import { shallow } from 'enzyme';
import Form from '../src/components/form';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('#form', () => {
  it('renders a text box', () => {
    const wrapper = shallow(<Form />);
    expect(wrapper.find('input').length).toEqual(1);
  });
});
