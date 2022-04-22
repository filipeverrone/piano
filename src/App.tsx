import { Grid } from '@mui/material';
import React from 'react';
import './App.css';
import ContinuousSlider from './components/Slider';
import Piano from './pages/Piano';

const App: React.FC = () => {
  const [value, setValue] = React.useState<number>(30);

  const handleChange = (_: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  };

  return (
    <Grid className="App">
      <header className="App-header">
        <ContinuousSlider value={value} handleChange={handleChange} />
        <Piano volume={value} />
      </header>
    </Grid>
  );
}

export default App;