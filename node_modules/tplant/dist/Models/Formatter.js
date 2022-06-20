"use strict";
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
exports.Formatter = void 0;
var os = __importStar(require("os"));
var Class_1 = require("../Components/Class");
var Interface_1 = require("../Components/Interface");
var Method_1 = require("../Components/Method");
var ComponentKind_1 = require("./ComponentKind");
var REGEX_ONLY_TYPE_NAMES = /\w+/g;
var REGEX_TYPE_NAMES_WITH_ARRAY = /\w+(?:\[\])?/g;
var Formatter = (function () {
    function Formatter(options) {
        this.options = options;
    }
    Formatter.prototype.header = function () {
        return [];
    };
    Formatter.prototype.footer = function () {
        return [];
    };
    Formatter.prototype.addAssociation = function (type1, cardinality, type2) {
        return [];
    };
    Formatter.prototype.serializeFile = function (file) {
        var _this = this;
        var result = [];
        file.parts.forEach(function (part) {
            result.push(_this.serialize(part));
        });
        return result.join(os.EOL);
    };
    Formatter.prototype.serializeEnumValue = function (component) {
        return component.name;
    };
    Formatter.prototype.serialize = function (component) {
        if (component.componentKind === ComponentKind_1.ComponentKind.CLASS) {
            return this.serializeClass(component);
        }
        else if (component.componentKind === ComponentKind_1.ComponentKind.FILE) {
            return this.serializeFile(component);
        }
        else if (component.componentKind === ComponentKind_1.ComponentKind.ENUM) {
            return this.serializeEnum(component);
        }
        else if (component.componentKind === ComponentKind_1.ComponentKind.ENUM_VALUE) {
            return this.serializeEnumValue(component);
        }
        else if (component.componentKind === ComponentKind_1.ComponentKind.INTERFACE) {
            return this.serializeInterface(component);
        }
        else if (component.componentKind === ComponentKind_1.ComponentKind.METHOD) {
            return this.serializeMethod(component);
        }
        else if (component.componentKind === ComponentKind_1.ComponentKind.NAMESPACE) {
            return this.serializeNamespace(component);
        }
        else if (component.componentKind === ComponentKind_1.ComponentKind.PARAMETER) {
            return this.serializeParameter(component);
        }
        else if (component.componentKind === ComponentKind_1.ComponentKind.PROPERTY) {
            return this.serializeProperty(component);
        }
        else if (component.componentKind === ComponentKind_1.ComponentKind.TYPE_PROPERTY) {
            return this.serializeTypeParameter(component);
        }
        throw new Error('Unknown Component');
    };
    Formatter.prototype.renderFiles = function (files, associations) {
        var _this = this;
        var lines = [];
        lines.push.apply(lines, this.header());
        files.forEach(function (file) {
            var conversion = _this.serialize(file);
            if (conversion !== '') {
                lines.push(conversion);
            }
        });
        if (associations) {
            lines.push.apply(lines, this.createAssociations(files));
        }
        lines.push.apply(lines, this.footer());
        return lines.join(os.EOL);
    };
    Formatter.prototype.createAssociations = function (files) {
        var _this = this;
        var associations = [];
        var mappedTypes = {};
        var outputConstraints = {};
        files.forEach(function (file) {
            file.parts.forEach(function (part) {
                if (part.componentKind === ComponentKind_1.ComponentKind.CLASS ||
                    part.componentKind === ComponentKind_1.ComponentKind.INTERFACE ||
                    part.componentKind === ComponentKind_1.ComponentKind.ENUM) {
                    mappedTypes[part.name] = true;
                }
            });
        });
        files.forEach(function (file) {
            if (file.componentKind !== ComponentKind_1.ComponentKind.FILE) {
                return;
            }
            file.parts.forEach(function (part) {
                if (!(part instanceof Class_1.Class) && !(part instanceof Interface_1.Interface)) {
                    return;
                }
                part.members.forEach(function (member) {
                    var checks = [];
                    if (member instanceof Method_1.Method) {
                        member.parameters.forEach(function (parameter) {
                            var parameters = parameter.parameterType.match(REGEX_ONLY_TYPE_NAMES);
                            if (parameters !== null) {
                                checks = checks.concat(parameters);
                            }
                        });
                    }
                    var returnTypes = member.returnType.match(REGEX_TYPE_NAMES_WITH_ARRAY);
                    if (returnTypes !== null) {
                        checks = checks.concat(returnTypes);
                    }
                    for (var _i = 0, checks_1 = checks; _i < checks_1.length; _i++) {
                        var tempTypeName = checks_1[_i];
                        var typeName = tempTypeName;
                        var cardinality = '1';
                        if (tempTypeName.endsWith('[]')) {
                            cardinality = '*';
                            typeName = typeName.substring(0, typeName.indexOf('[]'));
                        }
                        var key = part.name + " " + cardinality + " " + typeName;
                        if (typeName !== part.name &&
                            !outputConstraints.hasOwnProperty(key) && mappedTypes.hasOwnProperty(typeName)) {
                            associations.push.apply(associations, _this.addAssociation(part.name, cardinality, typeName));
                            outputConstraints[key] = true;
                        }
                    }
                });
            });
        });
        return associations;
    };
    return Formatter;
}());
exports.Formatter = Formatter;
