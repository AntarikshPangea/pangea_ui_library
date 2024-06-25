import { useState } from 'react'
import { Button, Dropdown } from 'pangea_ui_library'
import TextField from 'pangea_ui_library/components/TextField';

function App() {
  const options = ['Option 1', 'Option 2', 'Option 3'];
  const [value, setValue] = useState('');
  const [error, setError] = useState('');
  const [flag, setFlag] = useState(true); 

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    if (event.target.value === '') {
      setError('This field is required');
    } else {
      setError('');
    }
  };

  const toggleFlag = () => {
    setFlag((prevFlag) => !prevFlag);
  };

  return (
    <>
      <div className=''>
      <TextField
        label="Example Label"
        value={value}
        onChange={handleChange}
        errormsg={error}
        flag={flag} // Set the flag dynamically
      />
      <button onClick={toggleFlag}>
        {flag ? 'Disable' : 'Enable'} TextField
      </button>
        <Button className='bg-red-700'>Button</Button>
        <Dropdown label="Example Dropdown" options={options} value={value} onChange={(e) => setValue(e.target.value)} />
      </div>
    </>
  )
}

export default App;
