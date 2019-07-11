import React from 'react'
import { ThemeContext } from './ThemeProvider'
import Text2 from './Text2'

export default function ThemeConsumer2() {
  return (
    <ThemeContext.Consumer>
      {
        (ctx) => {
          console.log('Consumer', 2, 'render!!!', ctx)

          return <Text2 style={ctx.style2}>context2</Text2>
        }
      }
    </ThemeContext.Consumer>
  )
}
