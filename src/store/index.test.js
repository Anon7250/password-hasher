import { updatePassword, getPasswords } from './index.js';

test('updatePassword updates localStorage correctly', () => {
  window.localStorage.clear();
  updatePassword({name: "foobar", hash: "abc"});
  expect(
    window.localStorage.getItem("passwordv1-foobar")
  ).toEqual(
    "{\"name\":\"foobar\",\"hash\":\"abc\"}"
  )
});

test('updatePassword then getPasswords', () => {
  window.localStorage.clear();
  updatePassword({name: "foobar1", hash: "abc1"});
  updatePassword({name: "foobar2", hash: "abc2"});
  updatePassword({name: "foobar3", hash: "abc3"});
  expect(getPasswords()).toEqual([
    {name: "foobar1", hash: "abc1"},
    {name: "foobar2", hash: "abc2"},
    {name: "foobar3", hash: "abc3"},
  ])
});
