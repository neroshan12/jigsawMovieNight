import React from 'react';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../src/App.js';

configure({ adapter: new Adapter() });
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />)
  })
describe('app', () => {
  it('state has an array of movies', () => {
    expect(wrapper.instance().state.movies).toEqual([]);
  });

  it('renders our form', () => {
    expect(wrapper.find('Form').length).toEqual(1)
  })
});
