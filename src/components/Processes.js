import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import bytes from 'bytes';
import styled from 'styled-components';

// import Logging from './Logging';

const Table = styled.table`
  display:table;
  width:100%;
  border-collapse:collapse;
  font-size: 12px;
  font-family: Lato,'Helvetica Neue',Arial,Helvetica,sans-serif;
`;

const Task = styled.td`
  display: table-cell;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 150px;
  width:100%;
`;

const Number = styled.td`
  text-align: right;
  padding: 0 10px;
`;

const Process = styled.td`
  text-align: left;
  padding: 0 10px;
`;

const Th = styled.th`
  font-weight: bold;
  padding: 0 10px;
`;

const Loading = styled.div`
  width: 100%;
  text-align: center;
  vertical-align: middle;
  line-height: 360px;
  height: 360px;
`;

const GithubLink = styled.div`
  text-align: right;
  width: 100%;
  vertical-align: middle;
  text-decoration: none;
  color: black;
  line-height: 18px;
  height: 18px;
  font-family: Lato,'Helvetica Neue',Arial,Helvetica,sans-serif;
  cursor: pointer;
`;

const GithubImg = styled.img`
  vertical-align: middle;
  height: 18px;
  width: 18px;
  margin-bottom: 3px;
  margin-right: 10px;
  margin-left: 5px;
`;

/**
 * Doc: https://developer.chrome.com/extensions/processes
 */
class Processes extends React.PureComponent {
  goToGithub = () => {
    if (chrome && chrome.tabs) {
      chrome.tabs.create({ url: 'https://github.com/svengau/chrome-process-monitor' });
    }
  };

  render() {
    const { currentProcessId, processes } = this.props;

    // Logging.info('Processes::render', { currentProcessId, processes });

    if (!processes || processes.length === 0) {
      return (
        <Loading>
          Loading...
        </Loading>);
    }

    return (
      <Fragment>
        <Table>
          <thead>
            <tr>
              <Th>Process ID</Th>
              <Th>Tab</Th>
              <Th>CPU</Th>
              <Th>Private memory</Th>
              <Th>Javascript memory allocated</Th>
              <Th>Javascript memory used</Th>
            </tr>
          </thead>
          <tbody>
            {processes.map(process => (
              <tr key={process.id} style={{ backgroundColor: (currentProcessId === process.id) ? 'orange' : '' }}>
                <Process>{process.osProcessId}</Process>
                <Task>{process.tasks && process.tasks[0] && process.tasks[0].title}</Task>
                <Number>{process.cpu ? Math.round(process.cpu) : '-'}</Number>
                <Number>{process.privateMemory ? bytes(process.privateMemory) : '-'}</Number>
                <Number>{process.jsMemoryAllocated ? bytes(process.jsMemoryAllocated) : '-'}</Number>
                <Number>{process.jsMemoryUsed ? bytes(process.jsMemoryUsed) : '-'}</Number>
              </tr>
          ))}
          </tbody>
        </Table>
        <GithubLink onClick={this.goToGithub}>
            Hosted on Github <GithubImg alt="github" src="assets/github-32.png" />
        </GithubLink>
      </Fragment>
    );
  }
}

Processes.propTypes = {
  currentProcessId: PropTypes.number,
  processes: PropTypes.array,
};

Processes.defaultProps = {
  currentProcessId: null,
  processes: [],
};

export default Processes;
