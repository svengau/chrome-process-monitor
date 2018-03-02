/* global document */
import React from 'react';
import ReactDOM from 'react-dom';

import Popup from './components/Popup';

chrome.processes.onUpdatedWithMemory.addListener((processes) => {
  ReactDOM.render(
    <Popup processes={Object.values(processes)} />,
    document.getElementById('root'),
  );
});
