import { useState } from 'react'
import { Button, Dropdown } from 'pangea_ui_library'

function App() {
  const options = ['Option 1', 'Option 2', 'Option 3'];
  const [value, setValue] = useState('');

  return (
    <>
      <div className=''>
        <Button className='bg-red-700'>Button</Button>
        <Dropdown label="Example Dropdown" options={options} value={value} onChange={(e) => setValue(e.target.value)} />
      </div>
    </>
  )
}

export default App
