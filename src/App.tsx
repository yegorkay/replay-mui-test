import { useState } from 'react';
import { Typography, Box } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <Box>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </Box>
      <Typography variant="h1">Vite + React + MUI + Replay.io Test</Typography>
      <LoadingButton loading={count === 5} variant="outlined" onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </LoadingButton>
      <Typography>
        Edit <code>src/App.tsx</code> and save to test HMR
      </Typography>
      <Typography>Click on the Vite and React logos to learn more</Typography>
    </Box>
  );
}

export default App;
