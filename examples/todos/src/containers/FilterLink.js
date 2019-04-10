"use strict";
exports.__esModule = true;
var react_redux_1 = require("react-redux");
var actions_1 = require("../actions");
var Link_1 = require("../components/Link");
var mapStateToProps = function (state, ownProps) { return ({
    active: ownProps.filter === state.visibilityFilter
}); };
var mapDispatchToProps = function (dispatch, ownProps) { return ({
    onClick: function () { return dispatch(actions_1.setVisibilityFilter(ownProps.filter)); }
}); };
exports["default"] = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Link_1["default"]);
