import React from 'react';
import Octave from '../../components/Octave';
import { getNotesByOctaveId } from './utils';

interface Props {
  volume: number;
}

const Piano: React.FC<Props> = ({ volume }) => {
  const [key, setKey] = React.useState<string>('');
  const octaves = React.useMemo(() => [...Array(4)].map((_, index) => {
    const id = `${index + 1}`;
    return {
      id,
      notes: getNotesByOctaveId(id),
    };
  }), []);

  const keyToNote = React.useMemo(() => {
    const map: Record<string, string> = {};
    octaves.forEach(({ notes }) => {
      notes.forEach((note) => {
        const hotkey = note.keyboard?.toLowerCase();
        if (!hotkey || hotkey === 'ø') {
          return;
        }
        map[hotkey] = note.keyboard;
      });
    });
    return map;
  }, [octaves]);

  const handleKeyDown = React.useCallback((event: KeyboardEvent) => {
    const { altKey, ctrlKey, shiftKey } = event;
    if ([altKey, ctrlKey, shiftKey].includes(true)) {
      return;
    }
    const pressedKey = event.key.toLowerCase();
    if (!keyToNote[pressedKey]) {
      return;
    }
    event.preventDefault();
    setKey(keyToNote[pressedKey]);
  }, [keyToNote]);

  const handleKeyUp = React.useCallback((event: KeyboardEvent) => {
    const pressedKey = event.key.toLowerCase();
    if (!keyToNote[pressedKey]) {
      return;
    }
    setKey('');
  }, [keyToNote]);

  React.useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [handleKeyDown, handleKeyUp]);

  return (
    <section className="piano-scroll" aria-label="Piano keyboard">
      <div className="piano">
        {octaves.map(({ id, notes }) => (
          <Octave volume={volume} keyNote={key} harm={id} octave={notes} key={id} />
        ))}
      </div>
    </section>
  );
};

export default Piano;
