import * as Polymer from './node_modules/@polymer/polymer/polymer-element.js';
import './go-now-mixin.js';
class GoClock extends NowMixin(Polymer.Element) {
  static get template() {
    return `
    <style>
    :host {
      margin: 20px;
      display: block;
      color: white;
      text-shadow: 0 0 5px #000;
    }

    #time {
      font-size: 60px;
    }

    #date {
      font-size: 24px;
    }
    </style>

    <div id="time">[[_getTimeString(now)]]</div>
    <div id="date">[[_getDateString(now)]]</div>
`;
  }

  static get is() { return 'go-clock' }

  _getTimeString(now) {
    return now.toLocaleTimeString().substring(0, 11);
  }

  _getDateString(now) {
    return now.toDateString();
  }
}

customElements.define(GoClock.is, GoClock);
