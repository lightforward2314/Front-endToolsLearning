'use strict';

function main () {
    Promise.resolve().then(function () { return require('./foo-CZE8vTMN.js'); }).then(({default: foo}) => console.log(foo));
}

module.exports = main;
