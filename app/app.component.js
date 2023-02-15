"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var tutorials_component_1 = require('./tutorials.component');
// @Component({
//   selector: 'my-app',
//   template: `<h1>Hello World from Victor</h1>
//              <h4>Header 4 from App Component</h4>
//              <my-tutorials></my-tutorials>`,
//   styles: [`h4 {
//     color: blue;
//   }`],
//   directives: [TutorialsComponent]
// })
// @Component({
//   selector: 'my-app',
//   template: `<h1>Hello World</h1>
//              <h4>Parent App Component</h4>
//              <label>Enter Parent AppComponent Value</label>
//              <input type="text" #pData (keyup)="0">
//              <p>Value for Child TutorialConponent is</p>
//              {{childValue}}
//              <my-tutorials (childEvent)="childValue=$event" [parentData]="pData.value"></my-tutorials>`,
//   directives: [TutorialsComponent]
// })
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<h1>Hello World from Victor</h1>\n             <my-tutorials></my-tutorials>",
            directives: [tutorials_component_1.TutorialsComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map