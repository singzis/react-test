import React from 'react'
import { Option } from './withoutForwardRef'

interface Props<T extends Option<unknown>> {
  options: T[]
}

export const WithForwardRef = React.forwardRef(
  <T extends Option>(props: Props<T>, ref?: React.Ref<HTMLDivElement>) => {
    const { options } = props
    return (
      <div>
        {options.map(opt => {
          return <div>{opt.label}</div>
        })}
      </div>
    )
  }
)
