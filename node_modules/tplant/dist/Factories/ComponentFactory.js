"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentFactory = void 0;
var typescript_1 = __importDefault(require("typescript"));
var ClassFactory_1 = require("./ClassFactory");
var EnumFactory_1 = require("./EnumFactory");
var InterfaceFactory_1 = require("./InterfaceFactory");
var MethodFactory_1 = require("./MethodFactory");
var NamespaceFactory_1 = require("./NamespaceFactory");
var PropertyFactory_1 = require("./PropertyFactory");
var TypeParameterFactory_1 = require("./TypeParameterFactory");
var ComponentFactory;
(function (ComponentFactory) {
    function isNodeExported(node) {
        return (node.flags & typescript_1.default.ModifierFlags.Export) !== 0 ||
            node.parent.kind === typescript_1.default.SyntaxKind.SourceFile ||
            node.parent.kind === typescript_1.default.SyntaxKind.ModuleBlock;
    }
    ComponentFactory.isNodeExported = isNodeExported;
    function create(node, checker) {
        var componentComposites = [];
        typescript_1.default.forEachChild(node, function (childNode) {
            if (!isNodeExported(childNode)) {
                return;
            }
            if (childNode.kind === typescript_1.default.SyntaxKind.ClassDeclaration) {
                var currentNode = childNode;
                if (currentNode.name === undefined) {
                    return;
                }
                var classSymbol = checker.getSymbolAtLocation(currentNode.name);
                if (classSymbol === undefined) {
                    return;
                }
                componentComposites.push(ClassFactory_1.ClassFactory.create(classSymbol, checker));
            }
            else if (childNode.kind === typescript_1.default.SyntaxKind.InterfaceDeclaration) {
                var currentNode = childNode;
                var interfaceSymbol = checker.getSymbolAtLocation(currentNode.name);
                if (interfaceSymbol === undefined) {
                    return;
                }
                componentComposites.push(InterfaceFactory_1.InterfaceFactory.create(interfaceSymbol, checker));
            }
            else if (childNode.kind === typescript_1.default.SyntaxKind.ModuleDeclaration) {
                var currentNode = childNode;
                var namespaceSymbol = checker.getSymbolAtLocation(currentNode.name);
                if (namespaceSymbol === undefined) {
                    return;
                }
                componentComposites.push(NamespaceFactory_1.NamespaceFactory.create(namespaceSymbol, checker));
            }
            else if (childNode.kind === typescript_1.default.SyntaxKind.EnumDeclaration) {
                var currentNode = childNode;
                var enumSymbol = checker.getSymbolAtLocation(currentNode.name);
                if (enumSymbol === undefined) {
                    return;
                }
                componentComposites.push(EnumFactory_1.EnumFactory.create(enumSymbol));
                return;
            }
        });
        return componentComposites;
    }
    ComponentFactory.create = create;
    function getModifier(modifiers) {
        for (var _i = 0, modifiers_1 = modifiers; _i < modifiers_1.length; _i++) {
            var modifier = modifiers_1[_i];
            if (modifier.kind === typescript_1.default.SyntaxKind.PrivateKeyword) {
                return 'private';
            }
            if (modifier.kind === typescript_1.default.SyntaxKind.PublicKeyword) {
                return 'public';
            }
            if (modifier.kind === typescript_1.default.SyntaxKind.ProtectedKeyword) {
                return 'protected';
            }
        }
        return 'public';
    }
    function getExtendsHeritageClauseName(heritageClause) {
        return heritageClause.types[0].expression.text;
    }
    ComponentFactory.getExtendsHeritageClauseName = getExtendsHeritageClauseName;
    function getInterfaceName(nodeObject) {
        return nodeObject.expression.text;
    }
    function getImplementsHeritageClauseNames(heritageClause) {
        return heritageClause.types.map(getInterfaceName);
    }
    ComponentFactory.getImplementsHeritageClauseNames = getImplementsHeritageClauseNames;
    function isMethod(declaration) {
        return declaration.kind === typescript_1.default.SyntaxKind.MethodDeclaration ||
            declaration.kind === typescript_1.default.SyntaxKind.MethodSignature;
    }
    function isProperty(declaration) {
        return declaration.kind === typescript_1.default.SyntaxKind.PropertySignature ||
            declaration.kind === typescript_1.default.SyntaxKind.PropertyDeclaration ||
            declaration.kind === typescript_1.default.SyntaxKind.GetAccessor ||
            declaration.kind === typescript_1.default.SyntaxKind.SetAccessor ||
            declaration.kind === typescript_1.default.SyntaxKind.Parameter;
    }
    function isTypeParameter(declaration) {
        return declaration.kind === typescript_1.default.SyntaxKind.TypeParameter;
    }
    function getMemberModifier(memberDeclaration) {
        var memberModifiers = memberDeclaration.modifiers;
        if (memberModifiers === undefined) {
            return 'public';
        }
        return getModifier(memberModifiers);
    }
    ComponentFactory.getMemberModifier = getMemberModifier;
    function isAbstract(memberDeclaration) {
        var memberModifiers = memberDeclaration.modifiers;
        if (memberModifiers !== undefined) {
            for (var _i = 0, memberModifiers_1 = memberModifiers; _i < memberModifiers_1.length; _i++) {
                var memberModifier = memberModifiers_1[_i];
                if (memberModifier.kind === typescript_1.default.SyntaxKind.AbstractKeyword) {
                    return true;
                }
            }
        }
        return false;
    }
    ComponentFactory.isAbstract = isAbstract;
    function isStatic(memberDeclaration) {
        var memberModifiers = memberDeclaration.modifiers;
        if (memberModifiers !== undefined) {
            for (var _i = 0, memberModifiers_2 = memberModifiers; _i < memberModifiers_2.length; _i++) {
                var memberModifier = memberModifiers_2[_i];
                if (memberModifier.kind === typescript_1.default.SyntaxKind.StaticKeyword) {
                    return true;
                }
            }
        }
        return false;
    }
    ComponentFactory.isStatic = isStatic;
    function serializeMethods(memberSymbols, checker) {
        var result = [];
        if (memberSymbols !== undefined) {
            memberSymbols.forEach(function (memberSymbol) {
                var memberDeclarations = memberSymbol.getDeclarations();
                if (memberDeclarations === undefined) {
                    return;
                }
                memberDeclarations.forEach(function (memberDeclaration) {
                    if (isMethod(memberDeclaration)) {
                        result.push(MethodFactory_1.MethodFactory.create(memberSymbol, memberDeclaration, checker));
                    }
                    else if (isProperty(memberDeclaration)) {
                        result.push(PropertyFactory_1.PropertyFactory.create(memberSymbol, memberDeclaration, checker));
                    }
                });
            });
        }
        return result;
    }
    ComponentFactory.serializeMethods = serializeMethods;
    function serializeTypeParameters(memberSymbols, checker) {
        var result = [];
        if (memberSymbols !== undefined) {
            memberSymbols.forEach(function (memberSymbol) {
                var memberDeclarations = memberSymbol.getDeclarations();
                if (memberDeclarations === undefined) {
                    return;
                }
                memberDeclarations.forEach(function (memberDeclaration) {
                    if (isTypeParameter(memberDeclaration)) {
                        result.push(TypeParameterFactory_1.TypeParameterFactory.create(memberSymbol, memberDeclaration, checker));
                    }
                });
            });
        }
        return result;
    }
    ComponentFactory.serializeTypeParameters = serializeTypeParameters;
    function hasInitializer(declaration) {
        return declaration.initializer !== undefined;
    }
    ComponentFactory.hasInitializer = hasInitializer;
    function isOptional(declaration) {
        return declaration.questionToken !== undefined;
    }
    ComponentFactory.isOptional = isOptional;
})(ComponentFactory = exports.ComponentFactory || (exports.ComponentFactory = {}));
