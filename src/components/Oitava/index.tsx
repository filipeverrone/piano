import React from 'react';
import './piano.css';
import KeyNote from '../KeyNote';
import { Grid } from '@mui/material';
import { KeyboardNote } from '../../pages/Piano/interfaces';

interface Props {
  keyNote: string;
  harm: string;
  oitava: KeyboardNote[];
  volume: number;
}

const Oitava: React.FC<Props> = ({ keyNote, harm, oitava, volume }) => {
  const oitavaId = `oitava${harm}`;
  
  return (
    <Grid container xs={12}>
      <Grid id={oitavaId} container className="oitava">
        {oitava?.map((note, index) => (
          <Grid item key={index}>
            <KeyNote {...note} keynote={keyNote} key={index} oitavaId={oitavaId} volume={volume} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Oitava;
