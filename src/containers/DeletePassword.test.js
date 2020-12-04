import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { DeletePasswordTestable } from './DeletePassword';

test('Sends rmPassword action when "Delete" button is clicked', () => {
  const mockDispatch = jest.fn();
  const { getByText } = render(<DeletePasswordTestable name="foooBar" dispatch={mockDispatch}/>);
  const btn = getByText("Delete");
  expect(btn).toBeInTheDocument();
  fireEvent.click(btn);

  expect(mockDispatch).toHaveBeenCalledTimes(1);
  let action = mockDispatch.mock.calls[0][0];
  expect(action.type).toBe('RM_PASSWORD');
  expect(action.name).toBe('foooBar');
});
