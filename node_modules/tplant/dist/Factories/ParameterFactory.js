"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParameterFactory = void 0;
var Parameter_1 = require("../Components/Parameter");
var ComponentFactory_1 = require("./ComponentFactory");
var ParameterFactory;
(function (ParameterFactory) {
    function create(parameterSymbol, checker) {
        var result = new Parameter_1.Parameter(parameterSymbol.getName());
        var declarations = parameterSymbol.getDeclarations();
        var declaration;
        if (declarations !== undefined) {
            result.hasInitializer = ComponentFactory_1.ComponentFactory.hasInitializer(declarations[0]);
            result.isOptional = ComponentFactory_1.ComponentFactory.isOptional(declarations[0]);
            declaration = declarations[0];
        }
        result.parameterType = checker.typeToString(checker.getTypeOfSymbolAtLocation(parameterSymbol, parameterSymbol.valueDeclaration), declaration);
        return result;
    }
    ParameterFactory.create = create;
})(ParameterFactory = exports.ParameterFactory || (exports.ParameterFactory = {}));
