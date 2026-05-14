import React from 'react';
import type { SliderProps } from '@mui/material';
import './App.css';
import ContinuousSlider from './components/Slider';
import Piano from './pages/Piano';

const App: React.FC = () => {
  const [value, setValue] = React.useState<number>(60);

  const handleChange: NonNullable<SliderProps['onChange']> = (_, newValue) => {
    setValue(Array.isArray(newValue) ? newValue[0] : newValue);
  };

  return (
    <main className="App">
      <header className="App-header">
        <h1 className="App-title">Piano Online</h1>
        <p className="App-subtitle">Play with your keyboard on desktop or tap keys on mobile.</p>
        <ContinuousSlider value={value} handleChange={handleChange} />
        <Piano volume={value} />
      </header>
    </main>
  );
}

export default App;
