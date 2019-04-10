"use strict";
exports.__esModule = true;
var React = require("react");
var Todo = function (_a) {
    var onClick = _a.onClick, completed = _a.completed, text = _a.text;
    return (React.createElement("li", { onClick: onClick, style: {
            textDecoration: completed ? 'line-through' : 'none'
        } }, text));
};
exports["default"] = Todo;
