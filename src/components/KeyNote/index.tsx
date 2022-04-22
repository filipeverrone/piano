import React from 'react';
import './piano.css';
import { Howl } from 'howler';
import styles from './styles';
import { KeyboardNote } from '../../pages/Piano/interfaces';
import useWindowSize, { Size } from '../../hooks/useWindowSize';

interface Props extends KeyboardNote {
  keynote: string;
  oitavaId: string;
  volume: number;
}

const KeyNote: React.FC<Props> = ({ src, keyboard, label, keynote, oitavaId, volume }) => {
  const audio = React.useMemo(() => new Howl({src, volume: volume / 100}), [src, volume]);

  const [, setClassName] = React.useState<string>('unpressed');
  const getClassName = (press: boolean): string => `${press ? 'pressed' : 'unpressed'} button`;
  
  const play = React.useCallback(() => {
    audio.play();
    setClassName(getClassName(true))
  }, [audio]);

  const handleClick = () => {
    play();
  };

  const handleMouseUp = () => {
    setClassName(getClassName(false));
  };

  React.useEffect(() => {
    if (keynote?.toUpperCase() === keyboard?.toUpperCase()) {
      play();
    }
    setClassName(getClassName(false));
  }, [keynote, keyboard, play]);

  const isBemol = label.includes('b');

  const increment = (text: string): number => ({
    'Db': 0,
    'Eb': 1,
    'Gb': 3,
    'Ab': 4,
    'Bb': 5,
  }[text]) || 0;

  const buttonStyle = increment(label.replace(/\d/g, ''));

  const oitava = document.getElementById(oitavaId);

  const [left, setLeft] = React.useState<string>(
    `${(oitava?.offsetLeft || 0) + 22 * (buttonStyle + 1) + 11 * buttonStyle}px`
  );
  const size: Size = useWindowSize();

  React.useEffect(() => {
    setLeft(`${(oitava?.offsetLeft || 0) + 22 * (buttonStyle + 1) + 11 * buttonStyle}px`);
  }, [buttonStyle, oitava?.offsetLeft, size]);

  return (
    <button
      className={isBemol ? '' : 'whiteKey'}
      onClick={handleClick}
      onMouseUp={handleMouseUp}
      style={isBemol ? styles(left)?.blackKey : {}}
    >
      {!isBemol && <div>{label}</div>}
    </button>
  );
};

export default KeyNote;
