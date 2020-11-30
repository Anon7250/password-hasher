import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import VerifyPassword from './VerifyPassword';

const exampleRender = () => render(
  <VerifyPassword name="blah888-password-is-abc000" salt="2644047a-eca9-4858-8282-048480983051" hash="a02d" hashMethod="sha512;last4"/>
);

test('renders name', () => {
  const { getByText } = exampleRender();
  const txt = getByText(/blah888-password-is-abc000/);
  expect(txt).toBeInTheDocument();
});

test('primary button is called "Check" and changes when pressed', () => {
  const { getByText } = exampleRender();
  const btn = getByText("Check");
  expect(btn).toBeInTheDocument();

  fireEvent.click(btn);
  expect(btn.textContent).toEqual("More..");
});

test('primary button is called "Check" and changes when hitting Enter', () => {
  const { getByText, getByTestId } = exampleRender();
  const btn = getByText("Check");
  const inputBar = getByTestId("verify-password:input");
  expect(btn).toBeInTheDocument();
  expect(inputBar).toBeInTheDocument();
  
  fireEvent.keyPress(inputBar, {key: 'Enter', code: 'Enter', charCode: 123});
  expect(btn.textContent).toEqual("More..");
});

test('primary button changes back to "Check" when text changes', () => {
  const { getByText, getByTestId } = exampleRender();
  const btn = getByText("Check");
  const inputBar = getByTestId("verify-password:input");
  expect(btn).toBeInTheDocument();
  expect(inputBar).toBeInTheDocument();

  fireEvent.click(btn);
  expect(btn.textContent).toEqual("More..");
  fireEvent.keyPress(inputBar, {key: 'A', code: 'KeyA', charCode: 123});
  fireEvent.change(inputBar, {target: {value: 'A'}});
  expect(btn.textContent).toEqual("Check");
});
