import React from 'react';
import renderer from 'react-test-renderer';
import App from '../components/App'
it('renders correctly: no props', () => {
  const tree = renderer.create(<App/>).toJSON();
  expect(tree).toMatchSnapshot();
});
