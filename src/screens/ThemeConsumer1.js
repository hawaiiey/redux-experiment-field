/**
 * 模仿 react-redux 用 useMemo 做优化
 * 对组件引用的 state 做浅比较
 * 避免与该 state 无关的组件做没必要的更新
 */
import React, { useContext, useMemo } from 'react'
import { ThemeContext } from './ThemeProvider'
import Text1 from './Text1'

export default function ThemeConsumer1() {
  const ctx = useContext(ThemeContext)
  const textProps = {
    style: ctx.style1,
  }
  const renderContent = useMemo(() => (
    <Text1 {...textProps}>context1</Text1>
  ), [...Object.values(textProps)])
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
  return renderContent
}
