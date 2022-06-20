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
exports.PlantUMLFormat = void 0;
var os = __importStar(require("os"));
var Formatter_1 = require("../Models/Formatter");
var PlantUMLFormat = (function (_super) {
    __extends(PlantUMLFormat, _super);
    function PlantUMLFormat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PlantUMLFormat.prototype.header = function () {
        return ['@startuml'];
    };
    PlantUMLFormat.prototype.footer = function () {
        return ['@enduml'];
    };
    PlantUMLFormat.prototype.addAssociation = function (type1, cardinality, type2) {
        return [
            type1 + " --> \"" + cardinality + "\" " + type2
        ];
    };
    PlantUMLFormat.prototype.serializeClass = function (comp) {
        var _this = this;
        var result = [];
        var firstLine = [];
        if (comp.isAbstract) {
            firstLine.push('abstract ');
        }
        firstLine.push("class " + comp.name);
        if (comp.typeParameters.length > 0) {
            firstLine.push('<');
            firstLine.push(comp.typeParameters
                .map(function (typeParameter) { return _this.serializeTypeParameter(typeParameter); })
                .join(', '));
            firstLine.push('>');
        }
        if (comp.extendsClass !== undefined) {
            firstLine.push(" extends " + comp.extendsClass);
        }
        if (!this.options.onlyClasses && comp.implementsInterfaces.length > 0) {
            firstLine.push(" implements " + comp.implementsInterfaces.join(', '));
        }
        this.serializeMembers(comp, firstLine, result);
        return result.join(os.EOL);
    };
    PlantUMLFormat.prototype.serializeMembers = function (comp, firstLine, result) {
        var _this = this;
        if (comp.members.length > 0) {
            firstLine.push(' {');
        }
        result.push(firstLine.join(''));
        comp.members.forEach(function (member) {
            result.push("    " + _this.serialize(member));
        });
        if (comp.members.length > 0) {
            result.push('}');
        }
    };
    PlantUMLFormat.prototype.serializeEnum = function (comp) {
        var _this = this;
        var result = [];
        var declaration = "enum " + comp.name;
        if (comp.values.length > 0) {
            declaration += ' {';
        }
        result.push(declaration);
        comp.values.forEach(function (enumValue) {
            result.push("    " + _this.serializeEnumValue(enumValue));
        });
        if (comp.values.length > 0) {
            result.push('}');
        }
        return result.join(os.EOL);
    };
    PlantUMLFormat.prototype.serializeInterface = function (comp) {
        var _this = this;
        var result = [];
        var firstLine = [];
        firstLine.push("interface " + comp.name);
        if (comp.typeParameters.length > 0) {
            firstLine.push('<');
            firstLine.push(comp.typeParameters
                .map(function (typeParameter) { return _this.serializeTypeParameter(typeParameter); })
                .join(', '));
            firstLine.push('>');
        }
        if (comp.extendsInterface.length > 0) {
            firstLine.push(" extends " + comp.extendsInterface.join(', '));
        }
        this.serializeMembers(comp, firstLine, result);
        return result.join(os.EOL);
    };
    PlantUMLFormat.prototype.serializeMethod = function (comp) {
        var _this = this;
        var result = { public: '+', private: '-', protected: '#' }[comp.modifier];
        result += (comp.isAbstract ? '{abstract} ' : '');
        result += (comp.isStatic ? '{static} ' : '');
        result += comp.name + "(";
        result += comp.parameters
            .map(function (parameter) { return _this.serialize(parameter); })
            .join(', ');
        result += "): " + comp.returnType;
        return result;
    };
    PlantUMLFormat.prototype.serializeNamespace = function (comp) {
        var _this = this;
        var result = [];
        result.push("namespace " + comp.name + " {");
        comp.parts.forEach(function (part) {
            result.push(_this.serialize(part)
                .replace(/^(?!\s*$)/gm, '    '));
        });
        result.push('}');
        return result.join(os.EOL);
    };
    PlantUMLFormat.prototype.serializeParameter = function (comp) {
        return "" + comp.name + (comp.isOptional || comp.hasInitializer ? '?' : '') + ": " + comp.parameterType;
    };
    PlantUMLFormat.prototype.serializeProperty = function (comp) {
        var result = { public: '+', private: '-', protected: '#' }[comp.modifier];
        result += (comp.isAbstract ? '{abstract} ' : '');
        result += (comp.isStatic ? '{static} ' : '');
        result += "" + comp.name + (comp.isOptional ? '?' : '') + ": " + comp.returnType;
        return result;
    };
    PlantUMLFormat.prototype.serializeTypeParameter = function (comp) {
        return "" + comp.name + (comp.constraint !== undefined ? " extends " + comp.constraint : '');
    };
    return PlantUMLFormat;
}(Formatter_1.Formatter));
exports.PlantUMLFormat = PlantUMLFormat;
