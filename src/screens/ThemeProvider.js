import React, { Component } from 'react'

const theme = {
  style1: {
    color: '#FA8C16',
  },
  style2: {
    color: '#722ED1',
  },
  count: 0,
}
export const ThemeContext = React.createContext({})

export default class ThemeProvider extends Component {
  state = {
    theme,
  }

  add = () => {
    this.setState({
      theme: {
        ...this.state.theme,
        count: this.state.theme.count + 1,
      },
    })
  }

  changeColor = () => {
    this.setState({
      theme: {
        ...this.state.theme,
        style1: {
          ...this.state.style1,
          color: 'steelblue',
        },
      },
    })
  }

  render () {
    console.log('Provider', this.state.theme)

    return (
      <ThemeContext.Provider value={this.state.theme}>
        {this.props.children}
        <div>
          <span>{this.state.theme.count}</span>
          <button onClick={this.add}>add</button>
          <button onClick={this.changeColor}>changeColor</button>
        </div>
      </ThemeContext.Provider>
    )
  }
}
