const path = require('path');
const fs = require('fs')

module.exports = {
  externals: {
    'jsdom': 'window',
    'cheerio': 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': 'window',
    'react/addons': true,
  },
  resolve: {
    modules: [path.resolve(__dirname, '../src'), 'node_modules'],
  },
};
