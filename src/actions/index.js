export const addPassword = (name, salt, hash, hashMethod="sha512;last4") => ({
  type: 'ADD_PASSWORD',
  name,
  salt,
  hash,
  hashMethod,
})
