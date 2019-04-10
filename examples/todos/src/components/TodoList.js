"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var React = require("react");
var Todo_1 = require("./Todo");
var TodoList = function (_a) {
    var todos = _a.todos, toggleTodo = _a.toggleTodo;
    return (React.createElement("ul", null, todos.map(function (todo) {
        return React.createElement(Todo_1["default"], __assign({ key: todo.id }, todo, { onClick: function () { return toggleTodo(todo.id); } }));
    })));
};
exports["default"] = TodoList;
