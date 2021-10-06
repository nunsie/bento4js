const nativeModule = require('bindings')('mp4decrypt');

export const decrypt = (buffer: Buffer, keyMap: object) => {
  return new Promise(resolve => {
    nativeModule.decrypt(buffer, keyMap, resolve);
  });
};

export const sum = (a: number, b: number) => {
  if ('development' === process.env.NODE_ENV) {
    console.log('boop');
  }
  return a + b;
};
