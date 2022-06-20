"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MethodFactory = void 0;
var Method_1 = require("../Components/Method");
var ComponentFactory_1 = require("./ComponentFactory");
var ParameterFactory_1 = require("./ParameterFactory");
var MethodFactory;
(function (MethodFactory) {
    function create(signature, namedDeclaration, checker) {
        var result = new Method_1.Method(signature.getName());
        result.modifier = ComponentFactory_1.ComponentFactory.getMemberModifier(namedDeclaration);
        result.isAbstract = ComponentFactory_1.ComponentFactory.isAbstract(namedDeclaration);
        result.isOptional = ComponentFactory_1.ComponentFactory.isOptional(namedDeclaration);
        result.isStatic = ComponentFactory_1.ComponentFactory.isStatic(namedDeclaration);
        var methodSignature = checker.getSignatureFromDeclaration(namedDeclaration);
        if (methodSignature !== undefined) {
            result.returnType = checker.typeToString(methodSignature.getReturnType(), namedDeclaration);
            result.parameters = methodSignature.parameters
                .map(function (parameter) { return ParameterFactory_1.ParameterFactory.create(parameter, checker); });
        }
        return result;
    }
    MethodFactory.create = create;
})(MethodFactory = exports.MethodFactory || (exports.MethodFactory = {}));
