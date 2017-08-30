import * as Polymer from './node_modules/@polymer/polymer/polymer-element.js';
import './go-refresh-mixin.js';
class GoBackground extends RefreshMixin(Polymer.Element) {
  static get template() {
    return `
    <style>
    :host,
    #cover {
      display: block;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: #000;
      background-repeat: no-repeat;
      background-size: auto 110%;
      background-position: 40%;
      background-attachment: fixed;
    }

    #cover {
      transition: opacity 0.2s;
      will-change: opacity;
    }

    </style>

    <div id="cover"></div>

    <slot></slot>
`;
  }

  static get is() { return 'go-background' }

  constructor() {
    super();

    this._imgSrc = '';

    this._fadingImg = false;
  }

  connectedCallback() {
    super.connectedCallback();

    this.refreshInterval = 600000;

    requestAnimationFrame(_ => {
      this.addEventListener('transitionend', this._transitionEnd.bind(this));
    });
  }

  refreshImpl() {
    this._loadImage();
  }

  _loadImage() {
    this._imgSrc = 'http://traffic.kron.com/TrafficCams/cam3_2_large.jpg?' + Math.random();
    var img = document.createElement('img');
    img.addEventListener('load', this._imageLoaded.bind(this));
    img.src = this._imgSrc;
  }

  _imageLoaded() {
    this.style.backgroundImage = 'url("' + this._imgSrc + '")';
    this._fadingImg = true;
    this.$.cover.style.opacity = '0';
  }

  _transitionEnd() {
    if (this._fadingImg) {
      this._fadingImg = false;
      this.$.cover.style.backgroundImage = 'url("' + this._imgSrc + '")';
      this.$.cover.style.opacity = '';
    }
  }
}

customElements.define(GoBackground.is, GoBackground);
