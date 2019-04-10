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
var todos = function (state, action) {
    if (state === void 0) { state = []; }
    switch (action.type) {
        case 'ADD_TODO':
            return state.concat([
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]);
        case 'TOGGLE_TODO':
            return state.map(function (todo) {
                return (todo.id === action.id)
                    ? __assign({}, todo, { completed: !todo.completed }) : todo;
            });
        default:
            return state;
    }
};
exports["default"] = todos;
