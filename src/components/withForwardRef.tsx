import React, { Ref } from 'react'
import { Option } from './withoutForwardRef'

interface Props<T extends Option<unknown>> {
  options: T[]
}

// const WithFowardRefComp = <T extends Option>(
//   p: Props<T>,
//   ref?: Ref<HTMLDivElement>
// ) => (
//   <div ref={ref}>
//     {p.options.map(o => {
//       return <div>{o.label}</div>
//     })}
//   </div>
// )

// const WithForwardRef = React.forwardRef(WithFowardRefComp) as <
//   T extends Option
// >(
//   p: Props<T> & { ref?: Ref<HTMLDivElement> }
// ) => React.ReactElement

// const WithFowardRefComp1 = React.forwardRef(WithFowardRefComp)
// ↳ T is instantiated with base constraint `Option<unknown>` from FRefInputComp

// const WithForwardRef = <T extends Option>({
//   ref,
//   ...rest
// }: Props<T> & { ref: React.Ref<HTMLDivElement> }) => (
//   <WithFowardRefComp1 {...rest} ref={ref} />
// )

const WithForwardRef = <T extends Option>(
  props: Props<T> & { ref?: Ref<HTMLDivElement> }
) => (
  <div ref={props.ref}>
    {props.options.map(o => (
      <p>{o.label}</p>
    ))}
  </div>
)

export { WithForwardRef }
