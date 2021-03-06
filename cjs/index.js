'use strict';
const {define, defineAsync, get, upgrade, whenDefined} = require('wicked-elements');

customElements.define('we-lib', class extends HTMLElement {
  static get define() { return define; }
  static get defineAsync() { return defineAsync; }
  static get get() { return get; }
  static get upgrade() { return upgrade; }
  static get whenDefined() { return whenDefined; }
});

exports.define = define;
exports.defineAsync = defineAsync;
exports.get = get;
exports.upgrade = upgrade;
exports.whenDefined = whenDefined;
