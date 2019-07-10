import React from 'react'
import { ThemeContext } from './ThemeProvider'
import Text1 from './Text1'

export default function ThemeConsumer1() {
  return (
    <ThemeContext.Consumer>
      {
        (ctx) => {
          console.log('Consumer', 1, 'render!!!')
          return <Text1 style={{ color: ctx.color1 }}>context1</Text1>
        }
      }
    </ThemeContext.Consumer>
  )
}
