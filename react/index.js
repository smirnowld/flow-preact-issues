// @flow

import * as React from 'react'
import ReactDOM from 'react-dom'

type Props = {
  a: string,
  b: boolean,
  c: number
}

class MyComponentWithProps extends React.Component<Props> {
  render () {
    const {a, b, c} = this.props
    return <div>
      <span>{a}</span>
      <span>{b}</span>
      <span>{c}</span>
    </div>
  }
}

class App extends React.Component<*> {
  render() {
    return <MyComponentWithProps />
  }
}

const element = document.getElementById('root')
if (element !== null) {
  ReactDOM.render(<App />, element)
}
