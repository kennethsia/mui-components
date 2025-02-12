import { createTheme as createMuiTheme, ThemeOptions, Theme } from '@mui/material/styles';
import { PaletteOptions } from '@mui/material/styles';

export interface CustomThemeOptions extends ThemeOptions {
  customShadows?: {
    card?: string;
    button?: string;
  };
}

declare module '@mui/material/styles' {
  interface Theme {
    customShadows?: {
      card?: string;
      button?: string;
    };
  }
  interface ThemeOptions {
    customShadows?: {
      card?: string;
      button?: string;
    };
  }
}

const defaultPalette: PaletteOptions = {
  primary: {
    main: '#1976d2',
    light: '#42a5f5',
    dark: '#1565c0',
  },
  secondary: {
    main: '#9c27b0',
    light: '#ba68c8',
    dark: '#7b1fa2',
  },
};

const defaultTypography = {
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  h1: {
    fontSize: '2.5rem',
    fontWeight: 500,
  },
  h2: {
    fontSize: '2rem',
    fontWeight: 500,
  },
  h3: {
    fontSize: '1.75rem',
    fontWeight: 500,
  },
  h4: {
    fontSize: '1.5rem',
    fontWeight: 500,
  },
  h5: {
    fontSize: '1.25rem',
    fontWeight: 500,
  },
  h6: {
    fontSize: '1rem',
    fontWeight: 500,
  },
};

export const createTheme = (options: CustomThemeOptions = {}): Theme => {
  const {
    palette: userPalette,
    typography: userTypography,
    customShadows,
    ...otherOptions
  } = options;

  const baseTheme = createMuiTheme({
    palette: {
      ...defaultPalette,
      ...userPalette,
    },
    typography: {
      ...defaultTypography,
      ...userTypography,
    },
    shape: {
      borderRadius: 4,
    },
    ...otherOptions,
  });

  return createMuiTheme(baseTheme, {
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            boxShadow: customShadows?.button,
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            boxShadow: customShadows?.card,
          },
        },
      },
    },
    customShadows,
  });
};

export default createTheme;