import React from 'react'
import { ThemeContext } from './ThemeProvider'

export default function ThemeConsumer2() {
  return (
    <ThemeContext.Consumer>
      {
        (ctx) => {
          console.log('Consumer', 2, 'render!!!')
          return <div style={{ color: ctx.color2 }}>context2</div>
        }
      }
    </ThemeContext.Consumer>
  )
}
