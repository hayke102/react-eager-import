# react-eager-import

> Utilty libary to pre load/import modules

[![NPM](https://img.shields.io/npm/v/react-eager-import.svg)](https://www.npmjs.com/package/react-eager-import) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-eager-import
```

## Usage

```tsx
import React, { Component } from 'react'

import MyComponent from 'react-eager-import'
import 'react-eager-import/dist/index.css'

class Example extends Component {
  render() {
    return <MyComponent />
  }
}
```

## License

MIT © [hayke102](https://github.com/hayke102)
