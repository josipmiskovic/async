"use strict";
exports.__esModule = true;
var React = require("react");
var react_redux_1 = require("react-redux");
var actions_1 = require("../actions");
var AddTodo = function (_a) {
    var dispatch = _a.dispatch;
    var input;
    return (React.createElement("div", null,
        React.createElement("form", { onSubmit: function (e) {
                e.preventDefault();
                if (!input.value.trim()) {
                    return;
                }
                dispatch(actions_1.addTodo(input.value));
                input.value = '';
            } },
            React.createElement("input", { ref: function (node) { return input = node; } }),
            React.createElement("button", { type: "submit" }, "Add Todo"))));
};
exports["default"] = react_redux_1.connect()(AddTodo);
