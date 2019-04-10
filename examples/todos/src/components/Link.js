"use strict";
exports.__esModule = true;
var React = require("react");
var Link = function (_a) {
    var active = _a.active, children = _a.children, onClick = _a.onClick;
    return (React.createElement("button", { onClick: onClick, disabled: active, style: {
            marginLeft: '4px'
        } }, children));
};
exports["default"] = Link;
