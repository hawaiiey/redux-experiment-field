import React, { Component, Fragment } from 'react'
import { observer } from 'mobx-react'
import { observable } from 'mobx'

@observer
class S2 extends Component {
  @observable title = 'Welcome to S2!!!'
  @observable list = [
    { value: 'one' },
    { value: 'two' },
    { value: 'three' },
  ]

  render () {
    return (
      <Fragment>
        <span>{this.title}</span>
        <ul>
          {this.list.map((item, index) => <li key={index}>{item.value}</li>)}
        </ul>
        <button onClick={() => this.title = 'Welcome to what???'}>change title</button>
        <button onClick={() => this.list.push({ value: 'four' })}>add list</button>
      </Fragment>
    );
  }
}

export default S2
