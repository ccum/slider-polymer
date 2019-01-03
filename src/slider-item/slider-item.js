import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * @customElement
 * @polymer
 */
class SliderItem extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: none;
        }
        img{
          max-width: 800px;

        }
      </style>
      <img src="[[path]]"></img>
    `;
  }
  static get properties() {
    return {
      path: {
        type: String,
        value: ''
      }
    };
  }
  show(){
    this.style.display = "block";
  }

  hide(){
    this.style.display = "none";
  }
}

window.customElements.define('slider-item', SliderItem);
