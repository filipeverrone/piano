import { Grid } from '@mui/material';
import React from 'react';
import Octave from '../../components/Octave';
import { getNotesByOctaveId } from './utils';

interface Props {
  volume: number;
}

const Piano: React.FC<Props> = ({ volume }) => {
  const [key, setKey] = React.useState('');

  const handleKeyDown = (event: any) => {
    const { altKey, ctrlKey, shiftKey } = event;
    event.preventDefault();
    event.stopPropagation();
    if (![altKey, ctrlKey, shiftKey].includes(true)) {
      setKey(event.key);
    }
  };
  const handleKeyUp = () => setKey('');
  
  return (
    <Grid container xs={12} justifyContent="center" onKeyDown={handleKeyDown} onKeyUp={handleKeyUp}>
      {[...Array(4)].map((_, index) => {
        const id = `${index + 1}`;
        return (
          <Grid item key={index} onKeyDown={handleKeyDown} onKeyUp={handleKeyUp}>
            <Octave volume={volume} keyNote={key} harm={id} octave={getNotesByOctaveId(id)} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Piano;
