// // @flow
//
// import * as React from 'react'
// import ReactDOM from 'react-dom'
//
// function injectProp<Props: {}> (
//   Component: React.ComponentType<Props>,
// ): React.ComponentType<$Diff<Props, { foo: number | void }>> {
//   return function WrapperComponent (props: Props) {
//     return <Component {...props} foo={42}/>
//   }
// }
//
// class MyComponent extends React.Component<{
//   a: number,
//   b: number,
//   foo: number,
// }> {}
//
// // This breaks as Flow is not happy
// // const MyEnhancedComponent: React.Component<{a: number, b: number}> = injectProp(MyComponent)
// // This works but isn't typed
// const MyEnhancedComponent = injectProp(MyComponent)
//
// const element = document.getElementById('root')
// if (element !== null) {
//   // We don't need to pass in `foo` even though `MyComponent` requires it
//   ReactDOM.render(<MyEnhancedComponent a={1} b={2}/>, element)
//   // And this breaks as required prop `b` is not passed in, which is correct
//   // ReactDOM.render(<MyEnhancedComponent a={1} />, element)
// }
