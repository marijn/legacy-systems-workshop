"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumValueFactory = void 0;
var EnumValue_1 = require("../Components/EnumValue");
var EnumValueFactory;
(function (EnumValueFactory) {
    function create(signature) {
        return new EnumValue_1.EnumValue(signature.getName());
    }
    EnumValueFactory.create = create;
})(EnumValueFactory = exports.EnumValueFactory || (exports.EnumValueFactory = {}));
