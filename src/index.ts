const nativeModule = require('bindings')('bento4');

export const sum = (a: number, b: number) => {
  if ('development' === process.env.NODE_ENV) {
    console.log('boop');
  }
  return a + b;
};

export const mp4decrypt = (buffer: Buffer, keyMap: object) => {
  return new Promise(resolve => {
    nativeModule.mp4decrypt(buffer, keyMap, resolve);
  });
};

export const mp4split = () => {
  return new Promise(resolve => {
    resolve(0);
  });
};

export const mp4pssh = () => {
  return new Promise(resolve => {
    resolve(0);
  });
};
