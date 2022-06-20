"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumFactory = void 0;
var typescript_1 = __importDefault(require("typescript"));
var Enum_1 = require("../Components/Enum");
var EnumValueFactory_1 = require("./EnumValueFactory");
var EnumFactory;
(function (EnumFactory) {
    function create(enumSymbol) {
        var result = new Enum_1.Enum(enumSymbol.getName());
        if (enumSymbol.exports !== undefined) {
            result.values = serializeEnumProperties(enumSymbol.exports);
        }
        return result;
    }
    EnumFactory.create = create;
    function serializeEnumProperties(memberSymbols) {
        var result = [];
        if (memberSymbols !== undefined) {
            memberSymbols.forEach(function (memberSymbol) {
                var memberDeclarations = memberSymbol.getDeclarations();
                if (memberDeclarations === undefined) {
                    return;
                }
                memberDeclarations.forEach(function (memberDeclaration) {
                    if (memberDeclaration.kind === typescript_1.default.SyntaxKind.EnumMember) {
                        result.push(EnumValueFactory_1.EnumValueFactory.create(memberSymbol));
                    }
                });
            });
        }
        return result;
    }
})(EnumFactory = exports.EnumFactory || (exports.EnumFactory = {}));
