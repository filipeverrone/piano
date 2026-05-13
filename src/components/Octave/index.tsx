import React from 'react';
import './piano.css';
import KeyNote from '../KeyNote';
import { KeyboardNote } from '../../pages/Piano/interfaces';

interface Props {
  keyNote: string;
  harm: string;
  octave: KeyboardNote[];
  volume: number;
}

const Octave: React.FC<Props> = ({ keyNote, harm, octave, volume }) => {
  const octaveId = `octave${harm}`;
  const whiteKeys = React.useMemo(
    () => octave.filter((note) => !note.label.includes('b')),
    [octave]
  );
  const blackKeys = React.useMemo(
    () => octave.filter((note) => note.label.includes('b')),
    [octave]
  );
  const blackOffsets: Record<string, number> = {
    Db: 0,
    Eb: 1,
    Gb: 3,
    Ab: 4,
    Bb: 5,
  };

  return (
    <div id={octaveId} className="octave" data-octave={harm}>
      <div className="white-keys">
        {whiteKeys.map((note) => (
          <KeyNote {...note} keynote={keyNote} key={note.label} volume={volume} />
        ))}
      </div>
      <div className="black-keys" aria-hidden="true">
        {blackKeys.map((note) => {
          const noteName = note.label.replace(/[0-9]/g, '');
          const offset = blackOffsets[noteName];
          return (
            <KeyNote
              {...note}
              keynote={keyNote}
              key={note.label}
              volume={volume}
              isBlack
              left={`calc((var(--white-key-width) * ${offset + 1}) - (var(--black-key-width) / 2))`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Octave;
