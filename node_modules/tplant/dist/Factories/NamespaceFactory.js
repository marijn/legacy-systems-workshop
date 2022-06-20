"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NamespaceFactory = void 0;
var Namespace_1 = require("../Components/Namespace");
var ComponentFactory_1 = require("./ComponentFactory");
var NamespaceFactory;
(function (NamespaceFactory) {
    function create(namespaceSymbol, checker) {
        var result = new Namespace_1.Namespace(namespaceSymbol.getName());
        var namespaceDeclarations = namespaceSymbol.getDeclarations();
        if (namespaceDeclarations === undefined) {
            return result;
        }
        var declaration = namespaceDeclarations[namespaceDeclarations.length - 1];
        if (declaration === undefined || declaration.body === undefined || declaration.body.statements === undefined) {
            return result;
        }
        result.parts = ComponentFactory_1.ComponentFactory.create(declaration.body, checker);
        return result;
    }
    NamespaceFactory.create = create;
})(NamespaceFactory = exports.NamespaceFactory || (exports.NamespaceFactory = {}));
