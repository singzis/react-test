import React from 'react'
import { WithoutForwardRef, Option } from './components/withoutForwardRef'
import { WithForwardRef } from './components/withForwardRef'

interface CustomOption extends Option<number> {
  action: (value: number) => void
  flag: boolean
}

const App: React.FC = () => {
  return (
    <div>
      <h3>Without Forward Ref</h3>
      <h4>Basic</h4>
      <WithoutForwardRef
        options={[
          { value: 'test', label: 'Test' },
          { value: 1, label: 'Test Two' },
        ]}
      />
      <h4>Custom</h4>
      <WithoutForwardRef<CustomOption>
        options={[
          {
            value: 1,
            label: 'Test',
            action: value => {
              console.log('ACTION', value)
            },
            flag: true,
          },
        ]}
      />
      <h3>With Forward Ref</h3>
      <h4>Basic</h4>
      <WithForwardRef
        options={[
          { value: 'test', label: 'Test' },
          { value: 1, label: 'Test Two' },
        ]}
        // ref={null}
      />
      <h4>Custom (WitForwardRef is not generic here)</h4>
      <WithForwardRef<CustomOption>
        // ref={null}
        options={[
          {
            value: 1,
            label: 'Test',
            action: value => {
              console.log('ACTION', value)
            },
            flag: false,
          },
          {
            value: 12,
            label: 'Test2',
            action: value => {
              console.log('ACTION', value)
            },
            flag: true,
          },
        ]}
      />
    </div>
  )
}
export default App
