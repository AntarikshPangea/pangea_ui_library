import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { Button } from 'pangea_ui_library';
import { StyledEngineProvider } from '@mui/material';
import { AuthPage } from 'pangea_ui_library/page';

function App() {
  const [count, setCount] = useState(0);

  return (
    <StyledEngineProvider injectFirst>
      <div className="">
        <Button className="bg-purple-300">Button</Button>
      </div>
      <h1>Ui Library</h1>
      <AuthPage />
    </StyledEngineProvider>
  );
}

export default App;
