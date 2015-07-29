(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('jquery'), require('react'), require('jquery-inview')) :
  typeof define === 'function' && define.amd ? define(['jquery', 'react', 'jquery-inview'], factory) :
  global.Inview = factory(global.$, global.React)
}(this, function ($, React) { 'use strict';

  "use strict";

  var Inview = React.createClass({
    displayName: "Inview",

    componentDidMount: function componentDidMount() {
      var self = this;
      var element = React.findDOMNode(this);
      this.active = true;
      $(element).on("inview", function () {
        if (self.active) {
          self.active = false;
          self.props.onInview.apply(self.props.onInview, arguments);
        }
      });
    },

    componentDidUpdate: function componentDidUpdate() {
      this.active = true;
      setTimeout($.inviewCheck, 100);
    },

    componentWillUnmount: function componentWillUnmount() {
      var element = React.findDOMNode(this);
      $(element).off("inview");
    },

    render: function render() {
      return this.props.children || React.createElement("div", null);
    }
  });


  return Inview;

}));