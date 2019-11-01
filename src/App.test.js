import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { testActionCreator } from './store/actions';
import App from './App';

configure({ adapter: new Adapter() });

const mockStore = {
  getState: () => ({}),
  dispatch: jest.fn(),
  subscribe: () => {}
};

const RootComponent = <Provider store={mockStore}><App /></Provider>;

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(RootComponent, div);
});

describe('RootComponent renders with redux store props', () => {
  test('RootComponent renders with test props, dispatched once on CDM', () => {
    expect(mockStore.dispatch).toHaveBeenCalledTimes(1);
    expect(mockStore.dispatch).toHaveBeenCalledWith(testActionCreator());
  })
});
