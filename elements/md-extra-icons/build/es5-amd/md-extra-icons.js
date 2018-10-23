define([
  "exports",
  "./node_modules/@polymer/polymer/polymer-element.js",
  "./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js"
], function(_exports, _polymerElement, _HAXWiring) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.MdExtraIcons = void 0;
  function _templateObject_1ff29930d6fe11e89c206160e911b420() {
    var data = babelHelpers.taggedTemplateLiteral([
      "\n<style>:host {\n  display: block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n</style>\n<slot></slot>"
    ]);
    _templateObject_1ff29930d6fe11e89c206160e911b420 = function() {
      return data;
    };
    return data;
  }
  var MdExtraIcons = (function(_PolymerElement) {
    babelHelpers.inherits(MdExtraIcons, _PolymerElement);
    function MdExtraIcons() {
      babelHelpers.classCallCheck(this, MdExtraIcons);
      return babelHelpers.possibleConstructorReturn(
        this,
        (MdExtraIcons.__proto__ || Object.getPrototypeOf(MdExtraIcons)).apply(
          this,
          arguments
        )
      );
    }
    babelHelpers.createClass(
      MdExtraIcons,
      [
        {
          key: "connectedCallback",
          value: function connectedCallback() {
            babelHelpers
              .get(
                MdExtraIcons.prototype.__proto__ ||
                  Object.getPrototypeOf(MdExtraIcons.prototype),
                "connectedCallback",
                this
              )
              .call(this);
            this.HAXWiring = new _HAXWiring.HAXWiring();
            this.HAXWiring.setHaxProperties(
              MdExtraIcons.haxProperties,
              MdExtraIcons.tag,
              this
            );
          }
        }
      ],
      [
        {
          key: "template",
          get: function get() {
            return (0, _polymerElement.html)(
              _templateObject_1ff29930d6fe11e89c206160e911b420()
            );
          }
        },
        {
          key: "haxProperties",
          get: function get() {
            return {
              canScale: !0,
              canPosition: !0,
              canEditSource: !1,
              gizmo: {
                title: "Md extra-icons",
                description: "Automated conversion of md-extra-icons/",
                icon: "icons:android",
                color: "green",
                groups: ["Extra"],
                handles: [{ type: "todo:read-the-docs-for-usage" }],
                meta: {
                  author: "btopro",
                  owner: "The Pennsylvania State University"
                }
              },
              settings: { quick: [], configure: [], advanced: [] }
            };
          }
        },
        {
          key: "properties",
          get: function get() {
            return {};
          }
        },
        {
          key: "tag",
          get: function get() {
            return "md-extra-icons";
          }
        }
      ]
    );
    return MdExtraIcons;
  })(_polymerElement.PolymerElement);
  _exports.MdExtraIcons = MdExtraIcons;
  window.customElements.define(MdExtraIcons.tag, MdExtraIcons);
});