import React from 'react'
import { WithoutForwardRef, Option } from './components/withoutForwardRef'
import { WithForwardRef } from './components/withForwardRef'

interface CustomOption extends Option<number> {
  action: (value: number) => void
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
      />
      <h4>Custom (WitForwardRef is not generic here)</h4>
      <WithForwardRef<CustomOption>
        options={[
          {
            value: 1,
            label: 'Test',
            action: value => {
              console.log('ACTION', value)
            },
          },
        ]}
      />
    </div>
  )
}
export default App
