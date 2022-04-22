import { CSSProperties } from "react";

const styles = (left: string): { [key: string]: CSSProperties } => ({
  blackKey: { 
    backgroundColor: '#222',
    width: '22px',
    height: '80px',
    position: 'absolute',
    left: left,
  },
  whiteKey: { 
    backgroundColor: '#fff',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    paddingBottom: '10px',
    position: 'relative',
    width: '100%',
  },
  pressed: {
    backgroundColor: '#aaa !important',
  },
  unpressed: {
    backgroundColor: '#fff !important',
  },
});

export default styles;

/*
229
251
*/
