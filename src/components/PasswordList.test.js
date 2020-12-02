import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { createStore } from 'redux';

import PasswordList from './PasswordList';

const exampleContent = [
  {name: 'test123', salt: '8826aa59-4133-4074-a904-c9be256be784', hash: '3c1c', hashMethod: 'sha512;last4'},
  {name: 'abc000' , salt: '2644047a-eca9-4858-8282-048480983051', hash: 'a02d', hashMethod: 'sha512;last4'},
]
const examplePasswordList = () => render(
  <Provider store={createStore(x => x)}>
    <PasswordList content={exampleContent} />
  </Provider>
);

test('renders password names of all contents', () => {
  const { getByText } = examplePasswordList();
  expect(getByText("test123")).toBeInTheDocument();
  expect(getByText("abc000")).toBeInTheDocument();
});
