/* global chrome */

export default {
  info(...args) {
    if (typeof chrome === 'undefined' || !chrome || !chrome.extension) {
      return;
    }

    const bkg = chrome.extension.getBackgroundPage();

    if (bkg && bkg.console && bkg.console.log) {
      bkg.console.log(...args);
    }
  },
  error(args) {
    const bkg = chrome.extension.getBackgroundPage();
    bkg.console.error(args);
  },
};
