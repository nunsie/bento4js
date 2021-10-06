import fs from 'fs';
import path from 'path';
import { mp4decrypt } from '../src';

const buffer = fs.readFileSync(path.join(__dirname, 'mocks', 'sample.enc.mp4'));

describe('mp4decrypt', () => {
  test('works', done => {
    expect(
      mp4decrypt(buffer, {
        '1': 'a5d86ccd067f18daa13fcd3a1c3b4182',
      }).then((decrypted: any) => {
        fs.writeFileSync(
          path.join(__dirname, 'mocks', 'sample.dec.mp4'),
          decrypted
        );
        done();
        return decrypted;
      })
    ).toMatchSnapshot();
  });
});
