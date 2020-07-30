import {define, defineAsync, get, upgrade, whenDefined} from 'wicked-elements';

customElements.define('we-lib', class extends HTMLElement {
  static get define() { return define; }
  static get defineAsync() { return defineAsync; }
  static get get() { return get; }
  static get upgrade() { return upgrade; }
  static get whenDefined() { return whenDefined; }
});

export {define, defineAsync, get, upgrade, whenDefined};
