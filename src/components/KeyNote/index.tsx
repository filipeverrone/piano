import React from 'react';
import './piano.css';
import { Howl } from 'howler';
import { KeyboardNote } from '../../pages/Piano/interfaces';

const NON_PRINTABLE_HOTKEYS = ['ø', 'Dead'];

interface Props extends KeyboardNote {
  keynote: string;
  volume: number;
  isBlack?: boolean;
  left?: string;
}

const KeyNote: React.FC<Props> = ({ src, keyboard, label, keynote, volume, isBlack = false, left }) => {
  const howlRef = React.useRef<Howl | null>(null);
  const isPressed = keynote?.toLowerCase() === keyboard?.toLowerCase();

  React.useEffect(() => {
    howlRef.current = new Howl({
      src: [src],
      volume: 1,
      preload: true,
    });
    return () => {
      howlRef.current?.unload();
      howlRef.current = null;
    };
  }, [src]);

  React.useEffect(() => {
    if (howlRef.current) {
      howlRef.current.volume(volume / 100);
    }
  }, [volume]);

  const play = React.useCallback(() => {
    if (!howlRef.current) {
      return;
    }
    howlRef.current.stop();
    howlRef.current.play();
  }, []);

  React.useEffect(() => {
    if (isPressed) {
      play();
    }
  }, [isPressed, play]);

  const hotkeyText = keyboard && !NON_PRINTABLE_HOTKEYS.includes(keyboard) ? keyboard.toUpperCase() : '';

  return (
    <button
      className={`piano-key ${isBlack ? 'black-key' : 'white-key'} ${isPressed ? 'active' : ''}`}
      onPointerDown={play}
      style={isBlack && left ? { left } : undefined}
      aria-label={`Play note ${label}`}
      type="button"
    >
      {!isBlack && (
        <>
          <span className="label">{label}</span>
          {hotkeyText && <span className="hotkey">{hotkeyText}</span>}
        </>
      )}
    </button>
  );
};

export default KeyNote;
