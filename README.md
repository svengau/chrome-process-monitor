# Chrome Process Monitor

[![Build Status](https://travis-ci.org/svengau/chrome-process-monitor.svg?branch=master)](https://travis-ci.org/svengau/chrome-process-monitor)
[![Code Climate](https://codeclimate.com/github/svengau/chrome-process-monitor/badges/gpa.svg)](https://codeclimate.com/github/svengau/chrome-process-monitor)
[![Dependency Status](https://beta.gemnasium.com/badges/github.com/svengau/chrome-process-monitor.svg)](https://beta.gemnasium.com/projects/github.com/svengau/chrome-process-monitor)

Chrome Process Monitor is a chrome extension to display all processes running in Chrome, like the Chrome Task Manager, but directly accessible as a plugin.

**Important note:** this plugin uses a Chrome experimental feature to list all processes, and thus is only available with the **Chrome dev release**.

Chrome dev release could be downloaded and installed here: https://www.chromium.org/getting-involved/dev-channel

The processes API is documented here:
https://developer.chrome.com/extensions/processes

## Installation

The plugin is available in the Chrome Web Store.

[![Get Extension](https://developer.chrome.com/webstore/images/ChromeWebStore_Badge_v2_206x58.png)](https://chrome.google.com/webstore/detail/process-monitor/cjmlfpljepbkbepnpddjnckeihpanold)


## Build from Source

Install [Node.js](https://nodejs.org/en/)

Clone repository
```
git clone https://github.com/svengau/chrome-process-monitor.git
```

Install dependencies:

```
cd chrome-process-monitor
npm install
```

launch tests:

```
npm test
```

build the extension:

```
npm run build
```

Webpack will compile the project into `dist` directory.

Components are also in Storybook:

```
npm run storybook
```

## Credits

Webpack config largely inspired from project [Bandwidth Hero](https://github.com/ayastreb/bandwidth-hero) by Anatoliy Yastreb
