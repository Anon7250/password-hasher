import {createHash} from 'crypto';

export const _rawSha512 = str => {
  const hasher = createHash('sha512');
  hasher.update(str.toString());
  return hasher.digest('hex').toString();
};

export const toHash = (hashMethod, salt, password) => {
  if (hashMethod !== 'sha512;last4') 
    throw new Error(`Unsupported hash method: ${hashMethod}`);

  const hash = _rawSha512(salt.toString() + password.toString());
  return hash.slice(hash.length - 4);
}
