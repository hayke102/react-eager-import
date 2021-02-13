import { ComponentType, lazy, LazyExoticComponent } from 'react'

export const eagerImportDefault = <T extends ComponentType<any>>(
  factory: () => Promise<{ default: T }>
): LazyExoticComponent<T> => {
  const importPromise = factory();
  return lazy(() => importPromise)
}

export const eagerImport = <T extends {[x in string]: ComponentType<any>}, U extends keyof T>(
  factory: () => Promise<T>
) => {
  const promise = factory()
  return new Proxy<{[P in U]: LazyExoticComponent<T[P]>}>({} as any, {
    get: (_target, componentName: U) => {
        return lazy(() =>
          promise.then((x) => ({
            default: x[componentName],
          })))
      }
    });
}
