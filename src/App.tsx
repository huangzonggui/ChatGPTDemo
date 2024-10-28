import React, { useState } from 'react';
import { Container, TextField, Button, Box, Typography, GlobalStyles } from '@mui/material';
import Chat from './components/Chat';

const App: React.FC = () => {
  const [apiKey, setApiKey] = useState<string>('');
  const [isApiKeySet, setIsApiKeySet] = useState<boolean>(false);

  const handleSetApiKey = () => {
    if (apiKey.trim() !== '') {
      setIsApiKeySet(true);
    }
  };

  return (
    <>
      <GlobalStyles
        styles={{
          'input:-webkit-autofill': {
            WebkitBoxShadow: '0 0 0px 1000px white inset !important',
            filter: 'none',
            WebkitTextFillColor: 'inherit !important',
          },
          'input:-internal-autofill-selected': {
            backgroundColor: 'transparent !important',
            WebkitBoxShadow: '0 0 0px 1000px white inset !important',
            filter: 'none',
          },
        }}
      />
      <Container maxWidth="lg" sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        py: 2,
        mt: 4
      }}>
        {!isApiKeySet ? (
          <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
            <Typography variant="h5">Enter OpenRouter API Key</Typography>
            <TextField
              label="API Key"
              variant="outlined"
              fullWidth
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
            />
            <Button variant="contained" onClick={handleSetApiKey}>
              Submit
            </Button>
          </Box>
        ) : (
          <Chat apiKey={apiKey} />
        )}
      </Container>
    </>
  );
};

export default App;