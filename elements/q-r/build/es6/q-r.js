import {
  html,
  Polymer
} from "./node_modules/@polymer/polymer/polymer-legacy.js";
import { pathFromUrl } from "./node_modules/@polymer/polymer/lib/utils/resolve-url.js";
import "./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js";
import "./node_modules/@lrnwebcomponents/es-global-bridge/es-global-bridge.js";
export { QRCodeElement };
Polymer({
  _template: html`
    <style>
      :host {
        display: block;
      }
      #link {
        visibility: hidden;
        opacity: 0;
      }
    </style>
    <qr-code id="qr" data$="[[data]]" modulesize$="[[modulesize]]" margin$="[[margin]]" format$="[[format]]"></qr-code>
    <a href$="[[data]]" id="link">[[title]]</a>
`,
  is: "q-r",
  behaviors: [HAXBehaviors.PropertiesBehaviors],
  properties: {
    data: { type: String },
    title: { type: String },
    modulesize: { type: Number, value: 4 },
    margin: { type: Number, value: 2 },
    format: { type: String, value: "png" }
  },
  attached: function() {
    this.setHaxProperties({
      canScale: !0,
      canPosition: !0,
      canEditSource: !1,
      gizmo: {
        title: "QR Code",
        description: "A code to scan from a smartphone.",
        icon: "hardware:developer-board",
        color: "grey",
        groups: ["QR"],
        handles: [
          { type: "video", source: "data", title: "title" },
          { type: "image", source: "data", title: "title" },
          { type: "link", source: "data", title: "title" }
        ],
        meta: { author: "LRNWebComponents" }
      },
      settings: {
        quick: [
          {
            property: "data",
            title: "QR data",
            description: "Source of the data for the QR code.",
            inputMethod: "textfield",
            icon: "hardware:developer-board"
          },
          {
            property: "title",
            title: "Alternate title",
            description:
              "An alternate title to go to the source of the QR code.",
            inputMethod: "textfield",
            icon: "editor:title"
          },
          {
            property: "modulesize",
            title: "Size",
            description: "Size of the QR code",
            inputMethod: "textfield",
            icon: "image:photo-size-select-small"
          },
          {
            property: "margin",
            title: "Margin",
            description: "Wrapper to the code.",
            inputMethod: "textfield",
            icon: "icons:settings-overscan"
          },
          {
            property: "format",
            title: "Output format",
            description: "Format to put it out.",
            inputMethod: "select",
            options: { png: "PNG", html: "HTML", svg: "SVG" },
            icon: "editor:bubble-chart"
          }
        ],
        configure: [
          {
            property: "data",
            title: "QR data",
            description: "Source of the data for the QR code.",
            inputMethod: "textfield",
            icon: "hardware:developer-board"
          },
          {
            property: "title",
            title: "Alternate title",
            description:
              "An alternate title to go to the source of the QR code.",
            inputMethod: "textfield",
            icon: "editor:title"
          },
          {
            property: "modulesize",
            title: "Size",
            description: "Size of the QR code",
            inputMethod: "number",
            icon: "image:photo-size-select-small"
          },
          {
            property: "margin",
            title: "Margin",
            description: "Wrapper to the code.",
            inputMethod: "number",
            icon: "icons:settings-overscan"
          },
          {
            property: "format",
            title: "Output format",
            description: "Format to put it out.",
            inputMethod: "select",
            options: { png: "PNG", html: "HTML", svg: "SVG" },
            icon: "editor:bubble-chart"
          }
        ],
        advanced: []
      }
    });
  }
});
class QRCodeElement extends HTMLElement {
  constructor() {
    super();
    this._defineProperty = this._defineProperty.bind(this);
    this.attachShadow({ mode: "open" });
    Object.keys(QRCodeElement.defaultAttributes).map(this._defineProperty);
    const name = "qr",
      basePath = pathFromUrl(import.meta.url);
    window.addEventListener(
      `es-bridge-${name}-loaded`,
      this._qrLoaded.bind(this)
    );
    window.ESGlobalBridge.requestAvailability();
    window.ESGlobalBridge.instance.load(name, `${basePath}lib/qr.js`);
  }
  _qrLoaded() {
    this.generate();
  }
  static get defaultAttributes() {
    return { data: null, format: "png", modulesize: 5, margin: 4 };
  }
  static get observedAttributes() {
    return Object.keys(QRCodeElement.defaultAttributes);
  }
  attributeChangedCallback(attributeName, oldValue, newValue) {
    let fn = this[attributeName + "Changed"];
    if (fn && "function" === typeof fn) {
      fn.call(this, oldValue, newValue);
    }
    if (window.ESGlobalBridge.imports.qr) {
      this.generate();
    }
  }
  _defineProperty(attributeName) {
    Object.defineProperty(this, attributeName, {
      get: () => {
        let value = this.getAttribute(attributeName);
        return null === value
          ? QRCodeElement.defaultAttributes[attributeName]
          : value;
      },
      set: value => {
        this.setAttribute(attributeName, value);
      }
    });
  }
  getOptions() {
    let { modulesize, margin } = this;
    return {
      modulesize: null !== modulesize ? parseInt(modulesize) : modulesize,
      margin: null !== margin ? parseInt(margin) : margin
    };
  }
  generate() {
    if (null !== this.data) {
      if ("png" === this.format) {
        this.generatePNG();
      } else if ("html" === this.format) {
        this.generateHTML();
      } else if ("svg" === this.format) {
        this.generateSVG();
      } else {
        this.shadowRoot.innerHTML =
          "<div>qr-code: " + this.format + " not supported!</div>";
      }
    } else {
      this.shadowRoot.innerHTML = "<div>qr-code: no data!</div>";
    }
  }
  generatePNG() {
    try {
      let img = document.createElement("img");
      img.src = window.QRCode.generatePNG(this.data, this.getOptions());
      this.clear();
      this.shadowRoot.appendChild(img);
    } catch (e) {
      this.shadowRoot.innerHTML = "<div>qr-code: no canvas support!</div>";
    }
  }
  generateHTML() {
    let div = window.QRCode.generateHTML(this.data, this.getOptions());
    this.clear();
    this.shadowRoot.appendChild(div);
  }
  generateSVG() {
    let div = window.QRCode.generateSVG(this.data, this.getOptions());
    this.clear();
    this.shadowRoot.appendChild(div);
  }
  clear() {
    while (this.shadowRoot.lastChild) {
      this.shadowRoot.removeChild(this.shadowRoot.lastChild);
    }
  }
}
window.customElements.define("qr-code", QRCodeElement);