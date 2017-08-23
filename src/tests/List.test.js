import React from 'react';
import renderer from 'react-test-renderer';
import List from '../components/List'
it('renders correctly: no props', () => {
  const tree = renderer.create(<List items={[]}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
