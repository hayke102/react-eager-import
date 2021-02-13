# react-eager-import

> Utilty libary to pre load/import modules

# Eager vs Lazy Loading

Eager loading is importing your module(s) ahead of time (before you need them).
This differs from lazy loading which requests the module only on render.
Thus eager loading can be really useful if you know some modules will probably be used soon.

Good use of eager loading can give you <b>accelerated first load</b> time (by code-splitting) and <b>continuous fast responses</b> for the rest of your site.

Bad use of eager loading can cause redundant use of network for your users.

[![NPM](https://img.shields.io/npm/v/react-eager-import.svg)](https://www.npmjs.com/package/react-eager-import) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-eager-import
```

## Usage

```tsx
import { eagerImport, eagerImportDefault } from 'react-eager-import'

// These are loaded immediately!!!
const { Component2 } = eagerImport(() => import('./Components'))
const DefaultComponent = eagerImportDefault(() => import('./DefaultComponent'))

// This is loaded when you are trying to render it
const Component3 = lazy(() => import('./Component3'))
```

then you can use normal React `Suspense` syntax:

```tsx
import React, { Suspense } from 'react'

const App = () => (
  <Suspense fallback={'loading...'}>
    <Component />
  </Suspense>
)
```

## License

MIT © [hayke102](https://github.com/hayke102)
