import React from 'react'
import { ThemeContext } from './ThemeProvider'

export default function ThemeConsumer1() {
  return (
    <ThemeContext.Consumer>
      {
        (ctx) => {
          console.log('Consumer', 1, 'render!!!')
          return <div style={{ color: ctx.color1 }}>context1</div>
        }
      }
    </ThemeContext.Consumer>
  )
}
