# MUI Components Library

A comprehensive Material UI v5 component library designed for seamless and extensible React development. This library provides enhanced Material UI components with additional functionality, custom theming capabilities, and TypeScript support out of the box.

## Installation

```bash
npm install @kensia-kotini/mui-components

# or

yarn add @kensia-kotini/mui-components
```

## Features

- 🎨 Enhanced Material UI components with additional functionality
- 🎯 Custom theme creation with extended options
- 📘 TypeScript support out of the box
- 🛠 Utility functions for common tasks
- 📚 Comprehensive Storybook documentation
- 🎭 Customizable component variants

## Usage

### Basic Component Usage

```jsx
import { Button, TextField } from '@kensia-kotini/mui-components';

function App() {
  return (
    <div>
      <Button 
        variant="contained" 
        color="primary"
        onClick={() => console.log('clicked')}
      >
        Click Me
      </Button>
      
      <TextField 
        label="Enter text"
        variant="outlined"
      />
    </div>
  );
}
```

### Custom Theme

```jsx
import { createTheme } from '@kensia-kotini/mui-components';
import { ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  customShadows: {
    card: '0 2px 4px rgba(0,0,0,0.1)',
    button: '0 1px 3px rgba(0,0,0,0.1)',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <YourApp />
    </ThemeProvider>
  );
}
```

## Components

- Button - Enhanced MUI Button with additional variants
- TextField - Customizable text input component
- Card - Flexible card component with custom shadows
- Dialog - Modal dialog with improved animations
- And many more...

## Development

### Prerequisites

- Node.js >= 14
- npm or yarn

### Setup

1. Clone the repository:
```bash
git clone https://github.com/kensia-kotini/mui-components.git
cd mui-components
```

2. Install dependencies:
```bash
npm install
```

3. Start Storybook development server:
```bash
npm run storybook
```

4. Build the library:
```bash
npm run build
```

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Dependencies

This library requires the following peer dependencies:

```json
{
  "@mui/material": "^5.x",
  "@emotion/react": "^11.x",
  "@emotion/styled": "^11.x",
  "react": "^17.x || ^18.x",
  "react-dom": "^17.x || ^18.x"
}
```

## Support

If you have any questions or need help, please:
- Open an issue
- Check our [documentation](https://github.com/kensia-kotini/mui-components/wiki)
- Contact the maintainers

## Acknowledgments

- Material-UI team for the amazing base library
- All our contributors
