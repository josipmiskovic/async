"use strict";
exports.__esModule = true;
var React = require("react");
var Posts = function (_a) {
    var posts = _a.posts;
    return (React.createElement("ul", null, posts.map(function (post, i) {
        return React.createElement("li", { key: i }, post.title);
    })));
};
exports["default"] = Posts;
