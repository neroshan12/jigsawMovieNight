import React from 'react';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../src/App.js';
configure({ adapter: new Adapter() });

describe('app', () => {
  it('state has an array of movies', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.instance().state.movies).toEqual([]);
  });
});
