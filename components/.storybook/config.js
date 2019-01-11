import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import theme from '../src/theme';
import Box from '../src/Box/Box';
import ThemeProvider from '../src/ThemeProvider/ThemeProvider';
import withStyles from "@sambego/storybook-styles";

const req = require.context('../src', true, /\.story\.js$/);

function loadStories() {
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
  req.keys().forEach(filename => req(filename));
=======
>>>>>>> Resolves conflict
  require('../src/Box/Box.story.js');
  require('../src/Button/Button.story.js');
  require('../src/Flex/Flex.story.js');
  require('../src/Type/Headings.story.js');
  require('../src/Link/Link.story.js');
  require('../src/Type/Text.story.js');
  require('../src/Typography/Typography.story.js');
<<<<<<< HEAD
=======
>>>>>>> Removes article story from type component and creates generic Typography folder
=======
  req.keys().forEach(filename => req(filename));
>>>>>>> Resolves conflict
>>>>>>> Resolves conflict
}

addDecorator(withStyles({
  backgroundSize: '24px 24px',
  backgroundImage: 'linear-gradient(to right, transparent 7px, #F0F2F5 8px, transparent 9px, transparent 14px, #F0F2F5 15px, transparent 16px, transparent 23px, #C0C8D1 24px), linear-gradient(to bottom, transparent 7px, #F0F2F5 8px, transparent 9px, transparent 15px, #F0F2F5 16px, transparent 16px, transparent 23px, #C0C8D1 24px)',
  minHeight: 'calc(100vh - 32px)'
}));

addDecorator((story) => (
  <ThemeProvider theme={theme}>
    <Box p={2}>
      {story()}
    </Box>
  </ThemeProvider>
))

configure(loadStories, module);
