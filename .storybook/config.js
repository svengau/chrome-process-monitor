import { addDecorator, setAddon, configure } from '@storybook/react';
import { setDefaults } from '@storybook/addon-info';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

// addon-info
setDefaults({
  header: false, // Toggles display of header with component name and description
  inline: true,
  propTables: false,
});

// automatically import all files ending in *.stories.js
const req = require.context('../src/', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach((filename) => {
    console.log('loadStories', filename);
    req(filename)
  });
}

configure(loadStories, module);
