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
