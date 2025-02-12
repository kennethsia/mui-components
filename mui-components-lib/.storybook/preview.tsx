import React from 'react';
import type { Preview } from '@storybook/react';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '../src/theme';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
  },
  customShadows: {
    button: '0 2px 4px rgba(33, 150, 243, 0.2)',
  },
});

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <div style={{ margin: '2em' }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
};

export default preview;
