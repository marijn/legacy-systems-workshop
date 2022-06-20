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
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumValue = void 0;
var ComponentKind_1 = require("../Models/ComponentKind");
var IComponentComposite_1 = require("../Models/IComponentComposite");
var EnumValue = (function (_super) {
    __extends(EnumValue, _super);
    function EnumValue() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.componentKind = ComponentKind_1.ComponentKind.PROPERTY;
        return _this;
    }
    return EnumValue;
}(IComponentComposite_1.ComponentComposite));
exports.EnumValue = EnumValue;
