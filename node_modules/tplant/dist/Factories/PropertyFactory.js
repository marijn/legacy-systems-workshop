"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertyFactory = void 0;
var Property_1 = require("../Components/Property");
var ComponentFactory_1 = require("./ComponentFactory");
var PropertyFactory;
(function (PropertyFactory) {
    function create(signature, namedDeclaration, checker) {
        var result = new Property_1.Property(signature.getName());
        result.modifier = ComponentFactory_1.ComponentFactory.getMemberModifier(namedDeclaration);
        result.isAbstract = ComponentFactory_1.ComponentFactory.isAbstract(namedDeclaration);
        result.isOptional = ComponentFactory_1.ComponentFactory.isOptional(namedDeclaration);
        result.isStatic = ComponentFactory_1.ComponentFactory.isStatic(namedDeclaration);
        result.returnType = checker.typeToString(checker.getTypeOfSymbolAtLocation(signature, signature.valueDeclaration), namedDeclaration);
        return result;
    }
    PropertyFactory.create = create;
})(PropertyFactory = exports.PropertyFactory || (exports.PropertyFactory = {}));
