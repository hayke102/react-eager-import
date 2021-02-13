import React, { lazy, Suspense, useEffect, useState } from 'react'

import { eagerImport, eagerImportDefault } from 'react-eager-import'

// These are loaded immediately!!!
const DefaultComponent = eagerImportDefault(() => import('./DefaultComponent'))
const { Component } = eagerImport(() => import('./Component'))

// This is loaded when you are trying to render it
const ReactLazyComponent = lazy(() => import('./ReactLazyComponent'))

const App = () => {
  const [fiveSecondsPassed, setFiveSecondsPassed] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setFiveSecondsPassed(true)
    }, 5000)
  }, [])

  return (
    <div>
      <Suspense fallback={'loading...'}>
        <DefaultComponent />
      </Suspense>
      {fiveSecondsPassed && (
        <>
          {/* This will load immediately */}
          <Suspense fallback={'loading...'}>
            <Component />
          </Suspense>
          {/* This will import the module then load */}
          <Suspense fallback={'loading...'}>
            <ReactLazyComponent />
          </Suspense>
        </>
      )}
    </div>
  )
}

export default App
