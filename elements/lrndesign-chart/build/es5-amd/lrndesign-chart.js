define([
  "exports",
  "./node_modules/@polymer/polymer/polymer-element.js",
  "./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js"
], function(_exports, _polymerElement, _HAXWiring) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.LrndesignChart = void 0;
  function _templateObject_84b59900d6f711e895669573482bc433() {
    var data = babelHelpers.taggedTemplateLiteral([
      "\n<style>:host {\n  display: block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n</style>\n<slot></slot>"
    ]);
    _templateObject_84b59900d6f711e895669573482bc433 = function() {
      return data;
    };
    return data;
  }
  var LrndesignChart = (function(_PolymerElement) {
    babelHelpers.inherits(LrndesignChart, _PolymerElement);
    function LrndesignChart() {
      babelHelpers.classCallCheck(this, LrndesignChart);
      return babelHelpers.possibleConstructorReturn(
        this,
        (
          LrndesignChart.__proto__ || Object.getPrototypeOf(LrndesignChart)
        ).apply(this, arguments)
      );
    }
    babelHelpers.createClass(
      LrndesignChart,
      [
        {
          key: "connectedCallback",
          value: function connectedCallback() {
            babelHelpers
              .get(
                LrndesignChart.prototype.__proto__ ||
                  Object.getPrototypeOf(LrndesignChart.prototype),
                "connectedCallback",
                this
              )
              .call(this);
            this.HAXWiring = new _HAXWiring.HAXWiring();
            this.HAXWiring.setHaxProperties(
              LrndesignChart.haxProperties,
              LrndesignChart.tag,
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
              _templateObject_84b59900d6f711e895669573482bc433()
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
                title: "Lrndesign chart",
                description: "Automated conversion of lrndesign-chart/",
                icon: "icons:android",
                color: "green",
                groups: ["Chart"],
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
            return "lrndesign-chart";
          }
        }
      ]
    );
    return LrndesignChart;
  })(_polymerElement.PolymerElement);
  _exports.LrndesignChart = LrndesignChart;
  window.customElements.define(LrndesignChart.tag, LrndesignChart);
});