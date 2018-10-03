It seems that the Flow types in Preact packages are wrong and misleading. I've set up a very simple example - a component rendering another component, which
requires some props. The component is rendered without passing any props in, with the expectation that Flow will error out.

In the React example, Flow correctly detects the problem:

```text
➜  react git:(master) ✗ npx flow
Error ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ index.js:25:13

Cannot create MyComponentWithProps element because:
 • property a is missing in props [1] but exists in Props [2].
 • property b is missing in props [1] but exists in Props [2].
 • property c is missing in props [1] but exists in Props [2].

 [2] 12│ class MyComponentWithProps extends React.Component<Props> {
       :
     22│
     23│ class App extends React.Component<*> {
     24│   render() {
 [1] 25│     return <MyComponentWithProps />
     26│   }
     27│ }
     28│



Found 3 errors
```

In the Preact example, however, Flow is happy:

```text
➜  preact git:(master) ✗ npx flow
No errors!
```

If you compare Preact's [Flow types](https://github.com/developit/preact/blob/master/src/preact.js.flow) with its 
[TypeScript counterpart](https://github.com/developit/preact/blob/master/src/preact.d.ts), you'll notice that they're vastly different. `preact.js.flow` 
doesn't expose many of the types that are available in TypeScript definitions, meaning that Flow defaults to `any` for these. I also don't think that 
re-exporting React types as it currently set up works if I'm reading `flow-typed` docs correctly: 
https://github.com/flow-typed/flow-typed/wiki/FAQs#how-do-i-build-type-definitions-that-depend-on-other-definitions
