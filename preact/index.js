// @flow @jsx h

import { h, Component, render } from 'preact'

type Props = {
  a: string,
  b: boolean,
  c: number
}

class MyComponentWithProps extends Component<Props> {
  render () {
    const {a, b, c} = this.props
    return <div>
      <span>{a}</span>
      <span>{b}</span>
      <span>{c}</span>
    </div>
  }
}

class App extends Component<*> {
  render() {
    return <MyComponentWithProps />
  }
}

const element = document.getElementById('root')
if (element !== null) {
  render(<App />, element)
}
