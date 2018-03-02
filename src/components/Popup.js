import React from 'react';
import PropTypes from 'prop-types';

import Processes from './Processes';
// import Logging from './Logging';

class Popup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProcessId: null,
    };
    chrome.tabs.getSelected(null, (tab) => {
      chrome.processes.getProcessIdForTab(tab.id, (currentProcessId) => {
        this.setState({ currentProcessId });
      });
    });
  }

  render() {
    return (<Processes {...this.state} {...this.props} />);
  }
}

Popup.propTypes = {
  processes: PropTypes.array,
};

Popup.defaultProps = {
  processes: [],
};

export default Popup;
