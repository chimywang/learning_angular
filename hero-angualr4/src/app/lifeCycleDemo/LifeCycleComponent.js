"use strict";
/**
 * Created by chimy on 2017/10/1.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var LifeCycleComponent = (function () {
    function LifeCycleComponent() {
    }
    return LifeCycleComponent;
}());
LifeCycleComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n    <exe-parent name=\"exe-child-component\"></exe-parent>\n  ",
    })
], LifeCycleComponent);
exports.LifeCycleComponent = LifeCycleComponent;
//# sourceMappingURL=LifeCycleComponent.js.map