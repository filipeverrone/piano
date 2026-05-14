import * as React from 'react';
import { Box, Stack, Slider } from '@mui/material';
import type { SliderProps } from '@mui/material';
import { VolumeDown, VolumeUp } from '@mui/icons-material';

interface OwnProps {
  handleChange: NonNullable<SliderProps['onChange']>;
  value: number;
}

const ContinuousSlider: React.FC<OwnProps> = ({
  value,
  handleChange,
}) => {
  return (
    <Box sx={{ width: 200 }}>
      <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
        <VolumeDown />
        <Slider aria-label="Volume" value={value} onChange={handleChange} />
        <VolumeUp />
      </Stack>
    </Box>
  );
};

export default ContinuousSlider;
