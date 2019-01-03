import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * @customElement
 * @polymer
 */
class ImageSlider extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <div class="slider">
      </div>
    `;
  }
  static get properties() {
    return {
      index: {
        type: Number,
        value: 0
      },
      images:{
        type:Array,
        value(){
          return document.getElementsByTagName("slider-item");
        }
      }
    };
  }

  run(){
    this.images[this.index].hide();
    this.index++;
    if(this.index >= this.images.length){
      this.index = 0;
    }
    this.images[this.index].show();
    var that = this;
    setTimeout(function(){
      that.run();
    }, 2000);
  }

  ready(){
    this.run();
  }
}


window.customElements.define('image-slider', ImageSlider);
