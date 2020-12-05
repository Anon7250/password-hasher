export const updatePassword = item => {
  if (window && window.localStorage) {
    window.localStorage.setItem(`passwordv1-${item.name}`, JSON.stringify(item));
  }
};

export const getPasswords = () => {
  let storage = window && window.localStorage;
  if (!storage) return;

  let ans = [];
  for (let i = 0; i < storage.length; i ++) {
    let key = storage.key(i);
    if (key.indexOf("passwordv1-") !== 0) continue;

    let item = storage.getItem(key);
    ans.push(JSON.parse(item));
  }
  return ans
}
