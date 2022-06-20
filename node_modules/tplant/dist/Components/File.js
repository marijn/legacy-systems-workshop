"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.File = void 0;
var ComponentKind_1 = require("../Models/ComponentKind");
var File = (function () {
    function File() {
        this.componentKind = ComponentKind_1.ComponentKind.FILE;
        this.name = '';
        this.parts = [];
    }
    return File;
}());
exports.File = File;
