import React, { lazy, Suspense, useEffect, useState } from 'react'

import { eagerImport } from 'react-eager-import'

// This is loaded when you are trying to render Component2
const Component2 = lazy(() => import('./Component3'))
// This is loaded immediately!!!
const {default: Component1} = eagerImport(() => import('./Component1'))




const App = () => {
  const [displaySecondComponent, setDisplaySecondComponent] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setDisplaySecondComponent(true)
    }, 5000)
  }, [])

  return (
    <div>
      <Suspense fallback={'loading...'}>
        <Component1 text="asd"/>
      </Suspense>
      {displaySecondComponent && (
        <Suspense fallback={'loading...'}>
          <Component2 text="Asdsad"/>
        </Suspense>
        )}
    </div>
  )
}

export default App
