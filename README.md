# Chrome Process Monitor

Chrome Process Monitor is a chrome extension to display all processes running in Chrome, like the Chrome Task Manager, but directly accessible as a plugin.

## Installation

Coming soon

## Build From Source

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
