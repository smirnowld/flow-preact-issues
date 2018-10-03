// // @flow @jsx h
//
// import { h, Component, render } from 'preact'
//
// function injectProp<Props: {}> (
//   Component: Component<Props>,
// ): Component<$Diff<Props, { foo: number | void }>> {
//   return function WrapperComponent (props: Props) {
//     return <Component {...props} foo={42}/>
//   }
// }
//
// class MyComponent extends Component<{
//   a: number,
//   b: number,
//   foo: number,
// }> {}
//
// // This breaks but works with React
// const MyEnhancedComponent = injectProp(MyComponent)
//
// const element = document.getElementById('root')
// if (element !== null) {
//   render(<MyEnhancedComponent a={1} b={2}/>, element)
// }
