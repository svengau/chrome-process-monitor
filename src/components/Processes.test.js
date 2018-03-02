/* global it, expect */
import React from 'react';
import renderer from 'react-test-renderer';
import Processes from './Processes';
import processes from './processes.fixtures';

it('renders empty processes correctly', () => {
  const tree = renderer
    .create(<Processes />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders a list of processes correctly', () => {
  const tree = renderer
    .create(<Processes processes={processes} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
