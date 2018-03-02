import React from 'react';
import { storiesOf } from '@storybook/react';

import Processes from './Processes';
import processes from './processes.fixtures';

storiesOf('Processes', module)
  .add('without processes', () => {
    const story = <div style={{ width: '500px', border: '1px grey solid' }}><Processes /></div>;
    return story;
  })
  .add('with processes', () => {
    const story = <div style={{ width: '500px', border: '1px grey solid' }}><Processes currentProcessId={2} processes={processes} /></div>;

    return story;
  });
