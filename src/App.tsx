import { useState } from 'react';
import { Button } from 'pangea_ui_library';
import { StyledEngineProvider } from '@mui/material';
import Switch from 'pangea_ui_library/components/Switch';
import Checkbox from 'pangea_ui_library/components/Checkbox';
import Rating from 'pangea_ui_library/components/Rating';
import Link from 'pangea_ui_library/components/Link';

function App() {
  const [checked, setChecked] = useState(false);
  const [value, setValue] = useState<number | undefined>(0);
  return (
    <StyledEngineProvider injectFirst>
      <h1>Ui Library</h1>
      <div className="border-2 border-red-700 p-5">
        <Button className="bg-purple-300">Button</Button>
        <Switch onChange={() => setChecked(!checked)} checked={checked} required label="Checkbox" />
        <Checkbox disabled={false} onChange={() => setChecked(!checked)} checked={checked} required label="Checkbox" />
        <Rating value={value} onChange={(event, newValue) => setValue(Number(newValue))} label="Rating" />
        <Link href="https://google.com" onClick={() => console.log('clicked')} label="lidsfds" />
      </div>
    </StyledEngineProvider>
  );
}

export default App;
