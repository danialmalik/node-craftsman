'use strict';

var greet = function (name) {
    return `Hello ${name || 'world'}!`
};
module.exports = greet;
