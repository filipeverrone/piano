import { CSSProperties } from "react";

const styles = (): { [key: string]: CSSProperties } => ({
  oitava: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    minWidth: '20% !important',
    height: '130px',
    boxSizing: 'border-box',
  },
});

export default styles;
