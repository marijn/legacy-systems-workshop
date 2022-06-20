"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MermaidFormat = void 0;
var os = __importStar(require("os"));
var Formatter_1 = require("../Models/Formatter");
var MermaidFormat = (function (_super) {
    __extends(MermaidFormat, _super);
    function MermaidFormat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MermaidFormat.prototype.header = function () {
        return ['classDiagram'];
    };
    MermaidFormat.prototype.serializeClass = function (comp) {
        var _this = this;
        var result = [];
        var firstLine = [];
        firstLine.push("class " + comp.name);
        if (comp.name === this.options.targetClass) {
            firstLine.push(':::targetClassDiagram');
        }
        if (comp.typeParameters.length > 0) {
            firstLine.push('~');
            firstLine.push(comp.typeParameters
                .map(function (typeParameter) { return _this.serialize(typeParameter); })
                .join(', '));
            firstLine.push('~');
        }
        firstLine.push(' {');
        if (comp.extendsClass !== undefined) {
            result.push(comp.extendsClass + " <|-- " + comp.name);
        }
        if (!this.options.onlyClasses && comp.implementsInterfaces.length > 0) {
            comp.implementsInterfaces.map(function (inter) {
                result.push(inter + " <|.. " + comp.name);
            });
        }
        result.push(firstLine.join(''));
        comp.members.forEach(function (member) {
            result.push("" + _this.serialize(member));
        });
        result.push('}');
        if (comp.isAbstract) {
            result.push("<<abstract>> " + comp.name);
        }
        return result.join(os.EOL);
    };
    MermaidFormat.prototype.addAssociation = function (type1, cardinality, type2) {
        return [
            type1 + " ..> \"" + cardinality + "\" " + type2
        ];
    };
    MermaidFormat.prototype.serializeEnum = function (comp) {
        var _this = this;
        var result = [];
        var declaration = "class " + comp.name;
        if (comp.values.length > 0) {
            declaration += ' {';
        }
        result.push(declaration);
        comp.values.forEach(function (enumValue) {
            result.push("" + _this.serializeEnumValue(enumValue));
        });
        if (comp.values.length > 0) {
            result.push('}');
        }
        result.push("<<enumeration>> " + comp.name);
        return result.join(os.EOL);
    };
    MermaidFormat.prototype.serializeInterface = function (comp) {
        var _this = this;
        var result = [];
        var firstLine = [];
        firstLine.push("class " + comp.name);
        if (comp.typeParameters.length > 0) {
            firstLine.push('~');
            firstLine.push(comp.typeParameters
                .map(function (typeParameter) { return _this.serialize(typeParameter); })
                .join(', '));
            firstLine.push('~');
        }
        if (comp.extendsInterface.length > 0) {
            comp.extendsInterface.map(function (inter) {
                result.push(inter + " <|.. " + comp.name);
            });
        }
        if (comp.members.length > 0) {
            firstLine.push(' {');
        }
        result.push(firstLine.join(''));
        comp.members.forEach(function (member) {
            result.push("" + _this.serialize(member));
        });
        if (comp.members.length > 0) {
            result.push('}');
        }
        result.push("<<Interface>> " + comp.name);
        return result.join(os.EOL);
    };
    MermaidFormat.prototype.serializeMethod = function (comp) {
        var _this = this;
        var result = { public: '+', private: '-', protected: '#' }[comp.modifier];
        result += comp.name + "(";
        result += comp.parameters
            .map(function (parameter) { return _this.serialize(parameter); })
            .join(', ');
        result += ")" + (comp.isAbstract ? '*' : '') + (comp.isStatic ? '$' : '') + ": " + this.cleanType(comp.returnType);
        return result;
    };
    MermaidFormat.prototype.serializeNamespace = function (comp) {
        var _this = this;
        var result = [];
        comp.parts.forEach(function (part) {
            result.push(_this.serialize(part));
        });
        return result.join(os.EOL);
    };
    MermaidFormat.prototype.cleanType = function (typeDef) {
        if (typeDef !== undefined && typeDef.includes('{')) {
            return 'Inline';
        }
        return typeDef;
    };
    MermaidFormat.prototype.serializeParameter = function (comp) {
        var result = "" + comp.name + (comp.isOptional || comp.hasInitializer ? '?' : '');
        var typeDef = this.cleanType(comp.parameterType);
        if (typeDef !== undefined) {
            result += ": " + typeDef;
        }
        return result;
    };
    MermaidFormat.prototype.serializeProperty = function (comp) {
        var result = { public: '+', private: '-', protected: '#' }[comp.modifier];
        result += "" + comp.name + (comp.isOptional ? '?' : '') + (comp.isAbstract ? '*' : '') + (comp.isStatic ? '$' : '') + ": " + this.cleanType(comp.returnType);
        return result;
    };
    MermaidFormat.prototype.serializeTypeParameter = function (comp) {
        return "" + comp.name;
    };
    MermaidFormat.prototype.renderFiles = function (files, associations) {
        var indent = 0;
        return _super.prototype.renderFiles.call(this, files, associations)
            .split(os.EOL)
            .map(function (l) {
            var line = '    '.repeat(indent) + l.trim();
            if (line.endsWith('{')) {
                indent += 1;
            }
            else if (line.endsWith('}')) {
                indent -= 1;
                return line.substr(4);
            }
            return line;
        })
            .join(os.EOL);
    };
    return MermaidFormat;
}(Formatter_1.Formatter));
exports.MermaidFormat = MermaidFormat;
