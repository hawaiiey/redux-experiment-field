import React, { useContext } from 'react'
import { ThemeContext } from './ThemeProvider'
import Text2 from './Text2'

export default function ThemeConsumer2() {
  const ctx = useContext(ThemeContext)
  const textProps = {
    style: ctx.style2,
  }
  console.log('Consumer', 2, 'render!!!', ctx)

  // return (
  //   <ThemeContext.Consumer>
  //     {
  //       (ctx) => {
  //         console.log('Consumer', 2, 'render!!!', ctx)

  //         return <Text2 style={ctx.style2}>context2</Text2>
  //       }
  //     }
  //   </ThemeContext.Consumer>
  // )
  return (
    <Text2 {...textProps}>context1</Text2>
  )
}
