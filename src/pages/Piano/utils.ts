import { KeyboardNote } from "./interfaces";
import {
  C1, D1, Db1, E1, Eb1, F1, G1, Gb1, A1, Ab1, B1, Bb1,
  C2, D2, Db2, E2, Eb2, F2, G2, Gb2, A2, Ab2, B2, Bb2,
  C3, D3, Db3, E3, Eb3, F3, G3, Gb3, A3, Ab3, B3, Bb3,
  C4, D4, Db4, E4, Eb4, F4, G4, Gb4, A4, Ab4, B4, Bb4,
  // C5, D5, Db5, E5, Eb5, F5, G5, Gb5, A5, Ab5, B5, Bb5,
  // C6, D6, Db6, E6, Eb6, F6, G6, Gb6, A6, Ab6, B6, Bb6,
  // C7, D7, Db7, E7, Eb7, F7, G7, Gb7, A7, Ab7, B7, Bb7,
} from '../../sounds';

export const getNotesByOctaveId = (id: string): KeyboardNote[] => ({
  '1': [
    {
      src: C1,
      keyboard: 'ø',
      label: 'C1',
    },
    {
      src: D1,
      keyboard: 'ø',
      label: 'D1',
    },
    {
      src: E1,
      keyboard: 'ø',
      label: 'E1',
    },
    {
      src: F1,
      keyboard: 'ø',
      label: 'F1',
    },
    {
      src: G1,
      keyboard: 'ø',
      label: 'G1',
    },
    {
      src: A1,
      keyboard: 'ø',
      label: 'A1',
    },
    {
      src: B1,
      keyboard: 'ø',
      label: 'B1',
    },
    {
      src: Db1,
      keyboard: 'ø',
      label: 'Db1',
    },
    {
      src: Eb1,
      keyboard: 'ø',
      label: 'Eb1',
    },
    {
      src: Gb1,
      keyboard: 'ø',
      label: 'Gb1',
    },
    {
      src: Ab1,
      keyboard: 'ø',
      label: 'Ab1',
    },
    {
      src: Bb1,
      keyboard: 'ø',
      label: 'Bb1',
    },
  ],
  '2': [
    {
      src: C2,
      keyboard: 'z',
      label: 'C2',
    },
    {
      src: D2,
      keyboard: 'x',
      label: 'D2',
    },
    {
      src: E2,
      keyboard: 'c',
      label: 'E2',
    },
    {
      src: F2,
      keyboard: 'q',
      label: 'F2',
    },
    {
      src: G2,
      keyboard: 'w',
      label: 'G2',
    },
    {
      src: A2,
      keyboard: 'e',
      label: 'A2',
    },
    {
      src: B2,
      keyboard: 'r',
      label: 'B2',
    },
    {
      src: Db2,
      keyboard: 's',
      label: 'Db2',
    },
    {
      src: Eb2,
      keyboard: 'd',
      label: 'Eb2',
    },
    {
      src: Gb2,
      keyboard: '2',
      label: 'Gb2',
    },
    {
      src: Ab2,
      keyboard: '3',
      label: 'Ab2',
    },
    {
      src: Bb2,
      keyboard: '4',
      label: 'Bb2',
    },
  ],
  '3': [
    {
      src: C3,
      keyboard: 't',
      label: 'C3',
    },
    {
      src: D3,
      keyboard: 'y',
      label: 'D3',
    },
    {
      src: E3,
      keyboard: 'u',
      label: 'E3',
    },
    {
      src: F3,
      keyboard: 'i',
      label: 'F3',
    },
    {
      src: G3,
      keyboard: 'o',
      label: 'G3',
    },
    {
      src: A3,
      keyboard: 'p',
      label: 'A3',
    },
    {
      src: B3,
      keyboard: 'Dead',
      label: 'B3',
    },
    {
      src: Db3,
      keyboard: '6',
      label: 'Db3',
    },
    {
      src: Eb3,
      keyboard: '7',
      label: 'Eb3',
    },
    {
      src: Gb3,
      keyboard: '9',
      label: 'Gb3',
    },
    {
      src: Ab3,
      keyboard: '0',
      label: 'Ab3',
    },
    {
      src: Bb3,
      keyboard: '-',
      label: 'Bb3',
    },
  ],
  '4': [
    {
      src: C4,
      keyboard: '[',
      label: 'C4',
    },
    {
      src: D4,
      keyboard: 'v',
      label: 'D4',
    },
    {
      src: E4,
      keyboard: 'b',
      label: 'E4',
    },
    {
      src: F4,
      keyboard: 'n',
      label: 'F4',
    },
    {
      src: G4,
      keyboard: 'm',
      label: 'G4',
    },
    {
      src: A4,
      keyboard: ',',
      label: 'A4',
    },
    {
      src: B4,
      keyboard: '.',
      label: 'B4',
    },
    {
      src: Db4,
      keyboard: 'f',
      label: 'Db4',
    },
    {
      src: Eb4,
      keyboard: 'g',
      label: 'Eb4',
    },
    {
      src: Gb4,
      keyboard: 'j',
      label: 'Gb4',
    },
    {
      src: Ab4,
      keyboard: 'k',
      label: 'Ab4',
    },
    {
      src: Bb4,
      keyboard: 'l',
      label: 'Bb4',
    },
  ],
}[id]) || [];
