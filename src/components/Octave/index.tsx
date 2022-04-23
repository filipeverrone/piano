import React from 'react';
import './piano.css';
import KeyNote from '../KeyNote';
import { Grid } from '@mui/material';
import { KeyboardNote } from '../../pages/Piano/interfaces';

interface Props {
  keyNote: string;
  harm: string;
  octave: KeyboardNote[];
  volume: number;
}

const Octave: React.FC<Props> = ({ keyNote, harm, octave, volume }) => {
  const octaveId = `octave${harm}`;
  
  return (
    <Grid container xs={12}>
      <Grid id={octaveId} container className="octave">
        {octave?.map((note, index) => (
          <Grid item key={index}>
            <KeyNote {...note} keynote={keyNote} key={index} octaveId={octaveId} volume={volume} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Octave;
