export const addPassword = (name, salt, hash, hashMethod="sha512;last4") => ({
  type: 'ADD_PASSWORD',
  name,
  salt,
  hash,
  hashMethod,
})

export const rmPassword = (name) => ({
  type: 'RM_PASSWORD',
  name,
})

export const loadPasswords = content => ({type: 'LOAD_PASSWORDS', list: content})

export const dismissError = () => ({type: 'DISMISS_ERROR'})
export const showError = (msg) => ({type: 'SHOW_ERROR', msg})
