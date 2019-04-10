"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var React = require("react");
var react_redux_1 = require("react-redux");
var actions_1 = require("../actions");
var Picker_1 = require("../components/Picker");
var Posts_1 = require("../components/Posts");
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleChange = function (nextSubreddit) {
            _this.props.dispatch(actions_1.selectSubreddit(nextSubreddit));
        };
        _this.handleRefreshClick = function (e) {
            e.preventDefault();
            var _a = _this.props, dispatch = _a.dispatch, selectedSubreddit = _a.selectedSubreddit;
            dispatch(actions_1.invalidateSubreddit(selectedSubreddit));
            dispatch(actions_1.fetchPostsIfNeeded(selectedSubreddit));
        };
        return _this;
    }
    App.prototype.componentDidMount = function () {
        var _a = this.props, dispatch = _a.dispatch, selectedSubreddit = _a.selectedSubreddit;
        dispatch(actions_1.fetchPostsIfNeeded(selectedSubreddit));
    };
    App.prototype.componentDidUpdate = function (prevProps) {
        if (prevProps.selectedSubreddit !== this.props.selectedSubreddit) {
            var _a = this.props, dispatch = _a.dispatch, selectedSubreddit = _a.selectedSubreddit;
            dispatch(actions_1.fetchPostsIfNeeded(selectedSubreddit));
        }
    };
    App.prototype.render = function () {
        var _a = this.props, selectedSubreddit = _a.selectedSubreddit, posts = _a.posts, isFetching = _a.isFetching, lastUpdated = _a.lastUpdated;
        var isEmpty = posts.length === 0;
        return (React.createElement("div", null,
            React.createElement(Picker_1["default"], { value: selectedSubreddit, onChange: this.handleChange, options: ['reactjs', 'frontend'] }),
            React.createElement("p", null,
                lastUpdated &&
                    React.createElement("span", null,
                        "Last updated at ",
                        new Date(lastUpdated).toLocaleTimeString(),
                        ".",
                        ' '),
                !isFetching &&
                    React.createElement("button", { onClick: this.handleRefreshClick }, "Refresh")),
            isEmpty
                ? (isFetching ? React.createElement("h2", null, "Loading...") : React.createElement("h2", null, "Empty."))
                : React.createElement("div", { style: { opacity: isFetching ? 0.5 : 1 } },
                    React.createElement(Posts_1["default"], { posts: posts }))));
    };
    return App;
}(React.Component));
var mapStateToProps = function (state) {
    var selectedSubreddit = state.selectedSubreddit, postsBySubreddit = state.postsBySubreddit;
    var _a = postsBySubreddit[selectedSubreddit] || {
        isFetching: true,
        lastUpdated: 0,
        items: []
    }, isFetching = _a.isFetching, lastUpdated = _a.lastUpdated, posts = _a.items;
    return {
        selectedSubreddit: selectedSubreddit,
        posts: posts,
        isFetching: isFetching,
        lastUpdated: lastUpdated
    };
};
exports["default"] = react_redux_1.connect(mapStateToProps)(App);
