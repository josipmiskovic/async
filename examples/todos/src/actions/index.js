"use strict";
exports.__esModule = true;
var nextTodoId = 0;
exports.addTodo = function (text) { return ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    text: text
}); };
exports.setVisibilityFilter = function (filter) { return ({
    type: 'SET_VISIBILITY_FILTER',
    filter: filter
}); };
exports.toggleTodo = function (id) { return ({
    type: 'TOGGLE_TODO',
    id: id
}); };
exports.VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
};
