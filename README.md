<h1 align="center">Welcome to bento4js 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.0.1-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/nunsie/bento4js#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/nunsie/bento4js/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/nunsie/bento4js/blob/master/LICENSE" target="_blank">
    <img alt="License: GPL--2.0" src="https://img.shields.io/github/license/nunsie/bento4js" />
  </a>
  <a href="https://twitter.com/0x6e75730a" target="_blank">
    <img alt="Twitter: 0x6e75730a" src="https://img.shields.io/twitter/follow/0x6e75730a.svg?style=social" />
  </a>
</p>

> Native NodeJS wrapper implementing the bento4 utilities.

### 🏠 [Homepage](https://github.com/nunsie/bento4js)

### ✨ [Demo](https://github.com/nunsie/bento4js)

---

## Install

```sh
yarn add bento4js
```

## Usage

```js
const { mp4decrypt } = require('bento4js');

const keys = {
  aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa: 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb',
};

const encrypted = fs.readFileSync('enc.m4s');
mp4decrypt.decrypt(encrypted, keys).then((decrypted) => {
  fs.writeFileSync('dec.mp4', decrypted);
});
```

## Run tests

```sh
yarn test
```

---

## Roadmap

| app name       | description                                                                                                                     | status |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------ |
| mp4info        | displays high level info about an MP4 file, including all tracks and codec details                                              | ❌     |
| mp4dump        | displays the entire atom/box structure of an MP4 file                                                                           | ❌     |
| mp4edit        | add/insert/remove/replace atom/box items of an MP4 file                                                                         | ❌     |
| mp4extract     | extracts an atom/box from an MP4 file                                                                                           | ❌     |
| mp4encrypt     | encrypts an MP4 file (multiple encryption schemes are supported)                                                                | ❌     |
| mp4decrypt     | decrypts an MP4 file (multiple encryption schemes are supported)                                                                | ✅     |
| mp4dcfpackager | encrypts a media file into an OMA DCF file                                                                                      | ❌     |
| mp4compact     | converts ‘stsz’ tables into ‘stz2′ tables to create more compact MP4 files                                                      | ❌     |
| mp4fragment    | creates a fragmented MP4 file from a non-fragmented one or re-fragments an already-fragmented file                              | ❌     |
| mp4split       | splits a fragmented MP4 file into discrete files                                                                                | ❌     |
| mp4tag         | show/edit MP4 metadata (iTunes-style and others)                                                                                | ❌     |
| mp4mux         | multiplexes one or more elementary streams (H264, AAC) into an MP4 file                                                         | ❌     |
| mp42aac        | extract a raw AAC elementary stream from an MP4 file                                                                            | ❌     |
| mp42avc        | extract a raw AVC/H.264 elementary stream from an MP4 file                                                                      | ❌     |
| mp42hls        | converts an MP4 file to an HLS (HTTP Live Streaming) presentation, including the generation of the segments and .m3u8 playlist. | ❌     |
| mp42ts         | converts an MP4 file to an MPEG2-TS file.                                                                                       | ❌     |
| mp4-dash       | creates an MPEG DASH output from one or more MP4 files, including encryption.                                                   | ❌     |
| mp4-dash-clone | creates a local clone of a remote or local MPEG DASH presentation, optionally encrypting the segments as they are cloned.       | ❌     |

---

## Author

👤 **nunsie**

- Website: https://github.com/nunsie
- Twitter: [@0x6e75730a](https://twitter.com/0x6e75730a)
- Github: [@nunsie](https://github.com/nunsie)

---

## Acknowledgements

[@ubuntuegor](https://github.com/ubuntuegor): For the [ubuntuegor/mp4decrypt-buffer](https://github.com/ubuntuegor/mp4decrypt-buffer) repo that this project is based on and the pointers he has provided me with to get started.

[@axiomatic-systems](https://github.com/axiomatic-systems): For the [axiomatic-systems/Bento4](https://github.com/axiomatic-systems/Bento4) fantastic Bento4 SDK.

---

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/nunsie/bento4js/issues). You can also take a look at the [contributing guide](https://github.com/nunsie/bento4js/blob/master/CONTRIBUTING.md).

---

## Show your support

Give a ⭐️ if this project helped you!

---

## 📝 License

Copyright © 2021 [nunsie](https://github.com/nunsie).<br />
This project is [GPL--2.0](https://github.com/nunsie/bento4js/blob/master/LICENSE) licensed.
