import React, { Component } from 'react'

const theme = {
  color1: '#FA8C16',
  color2: '#722ED1',
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
      }
    })
  }

  render () {
    return (
      <ThemeContext.Provider value={this.state.theme}>
        {this.props.children}
        <div>
          <span>{this.state.theme.count}</span>
          <button onClick={this.add}>add</button>
        </div>
      </ThemeContext.Provider>
    )
  }
}
