"use strict";
exports.__esModule = true;
var React = require("react");
var Picker = function (_a) {
    var value = _a.value, onChange = _a.onChange, options = _a.options;
    return (React.createElement("span", null,
        React.createElement("h1", null, value),
        React.createElement("select", { onChange: function (e) { return onChange(e.target.value); }, value: value }, options.map(function (option) {
            return React.createElement("option", { value: option, key: option }, option);
        }))));
};
exports["default"] = Picker;
