import React, { useContext } from 'react'
import { ThemeContext } from './ThemeProvider'
import Text1 from './Text1'

export default function ThemeConsumer1() {
  const ctx = useContext(ThemeContext)
  const textProps = {
    style: ctx.style1,
  }
  console.log('Consumer', 1, 'render!!!', ctx)

  // return (
  //   <ThemeContext.Consumer>
  //     {
  //       (ctx) => {
  //         console.log('Consumer', 1, 'render!!!', ctx)
  //         const props = {
  //           style: ctx.style1,
  //         }

  //         return <Text1 {...props}>context1</Text1>
  //       }
  //     }
  //   </ThemeContext.Consumer>
  // )
  return (
    <Text1 {...textProps}>context1</Text1>
  )
}
