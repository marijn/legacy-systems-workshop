"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeParameterFactory = void 0;
var typescript_1 = __importDefault(require("typescript"));
var TypeParameter_1 = require("../Components/TypeParameter");
var TypeParameterFactory;
(function (TypeParameterFactory) {
    function getConstraint(memberDeclaration, checker) {
        var effectiveConstraint = typescript_1.default.getEffectiveConstraintOfTypeParameter(memberDeclaration);
        if (effectiveConstraint === undefined) {
            return;
        }
        return checker.typeToString(checker.getTypeFromTypeNode(effectiveConstraint));
    }
    TypeParameterFactory.getConstraint = getConstraint;
    function create(signature, namedDeclaration, checker) {
        var result = new TypeParameter_1.TypeParameter(signature.getName());
        result.constraint = getConstraint(namedDeclaration, checker);
        return result;
    }
    TypeParameterFactory.create = create;
})(TypeParameterFactory = exports.TypeParameterFactory || (exports.TypeParameterFactory = {}));
