import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { AddPasswordTestable } from './AddPassword';

test('Sends addPassword action when "Add" button is clicked', () => {
  const mockDispatch = jest.fn();
  const { getByText } = render(<AddPasswordTestable dispatch={mockDispatch}/>);
  const btn = getByText("Add");
  expect(btn).toBeInTheDocument();
  fireEvent.click(btn);

  expect(mockDispatch).toHaveBeenCalledTimes(1);
  let action = mockDispatch.mock.calls[0][0];
  expect(action.type).toBe('ADD_PASSWORD');
  expect(action.name).toBe('');
});

test('Updates window.localStorage when "Add" button is clicked', () => {
  window.localStorage.clear();
  const mockDispatch = jest.fn();
  const { getByText } = render(<AddPasswordTestable dispatch={mockDispatch}/>);
  const btn = getByText("Add");
  expect(btn).toBeInTheDocument();
  fireEvent.click(btn);
  expect(window.localStorage.length).toBe(1);
  expect(window.localStorage.key(0)).toBe('passwordv1-');
  expect(JSON.parse(window.localStorage.getItem('passwordv1-')).name).toBe('');
});

test('Sends showError action when password names have duplicates', () => {
  const mockDispatch = jest.fn();
  const { getByText } = render(
    <AddPasswordTestable dispatch={mockDispatch} allPasswords={[{name: ''}]}/>
  );
  const btn = getByText("Add");
  expect(btn).toBeInTheDocument();
  fireEvent.click(btn);

  expect(mockDispatch).toHaveBeenCalledTimes(1);
  let action = mockDispatch.mock.calls[0][0];
  expect(action.type).toBe('SHOW_ERROR');
  expect(action.msg).toBe(
    'There is already a password named "". Please use a different name.'
  );
});
