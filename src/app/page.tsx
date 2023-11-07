import React from 'react';
import { Box, Text, Grid, Heading } from '@radix-ui/themes';

const Homepage = () => {
  return (
    <div className="homepage">
      {/* Grid for Images */}
      <Grid
        style={{
          gap: 20,
          gridTemplateColumns: 'repeat(4, 1fr)',
          alignItems: 'center',
          justifyItems: 'center',
        }}
      >
        <img src="https://i.ibb.co/G5VcKdJ/download.png" alt="houndoom" />
        <img src="https://i.ibb.co/8dKTmfq/download-1.png" alt="sceptile" />
        <img src="https://i.ibb.co/XJtJ8xs/download.png" alt="ironbundle" />
        <img src="https://i.ibb.co/dtgsyvv/dialga.png" alt="dialga" />
        <img src="https://i.ibb.co/0VRXbqw/drednaw.png" alt="drednaw" />
        <img src="https://i.ibb.co/hHyQd5B/noivern.png" alt="noivern" />
        <img src="https://i.ibb.co/Jt3TJ05/pikachu.png" alt="pikachu" />
        <img src="https://i.ibb.co/xMRT3T7/toxicroak.png" alt="toxicroak" />
      </Grid>

      <Box style={{ padding: 20, backgroundColor: 'lightgray' }}>
        <Heading size="4">Welcome to the Radical Red Movesets Database!</Heading>
      </Box>

      <Box style={{ padding: 20, backgroundColor: 'lightgray' }}>
        <Text>
          Report Mistakes in the Documentation-Reports channel in the Radical Red Discord Server.
        </Text>
      </Box>
    </div>
  );
};

export default Homepage;