"use strict";
exports.__esModule = true;
var react_redux_1 = require("react-redux");
var actions_1 = require("../actions");
var TodoList_1 = require("../components/TodoList");
var actions_2 = require("../actions");
var getVisibleTodos = function (todos, filter) {
    switch (filter) {
        case actions_2.VisibilityFilters.SHOW_ALL:
            return todos;
        case actions_2.VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(function (t) { return t.completed; });
        case actions_2.VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(function (t) { return !t.completed; });
        default:
            throw new Error('Unknown filter: ' + filter);
    }
};
var mapStateToProps = function (state) { return ({
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
}); };
var mapDispatchToProps = function (dispatch) { return ({
    toggleTodo: function (id) { return dispatch(actions_1.toggleTodo(id)); }
}); };
exports["default"] = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(TodoList_1["default"]);
