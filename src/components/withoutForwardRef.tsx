export interface Option<O = unknown> {
  value: O
  label: string
}

interface Props<T extends Option<unknown>> {
  options: T[]
}

export const WithoutForwardRef = <T extends Option>(props: Props<T>) => {
  const { options } = props
  return (
    <div>
      {options.map(opt => {
        return <div>{opt.label}</div>
      })}
    </div>
  )
}
