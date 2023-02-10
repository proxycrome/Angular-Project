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
var core_1 = require("@angular/core");
var core_2 = require("@angular/core");
// Atributes and properties, Classes and styles, and click handlers
// @Component({
//     selector: 'my-tutorials',
//     template: `<h2>{{title}}</h2>
//                 <h4>Header 4 from Tutorial Component</h4>
//                 <img [src]="imgLink"/><br/><br/>
//                 <input type="text" value="Angular"/><br /><br />
//                 <div [class.myClass]="applyclass">Apply Class binding</div>
//                 <div [style.color]="applyStyle ? 'blue' : 'orange'">This is style binding</div>
//                 <button (click)="onClick($event, demoInput.value)">Click Me</button>
//                 <input type="text" #demoInput />`,
//     styles: [`h4 {
//         color: red;
//     }
//     .myClass {
//         color: red
//     }`] 
// })
// export class TutorialsComponent{
//     public title = "Tutorial From Joatmon"
//     public imgLink = "https://picsum.photos/id/237/400/200"
//     public applyclass = true
//     public applyStyle = true
//     onClick(value){
//         console.log(value);
//     }
// };
// Event Binding, Two way Binding and references
// @Component({
//     selector: 'my-tutorials',
//     template: `<h2>{{title}}</h2>
//                 <input type="text" [(ngModel)]="fName"/>
//                 <input type="text" [(ngModel)]="lName"/>
//                 fullname {{fName}} {{lName}}`,
// })
// export class TutorialsComponent{
//     public title = "Tutorials from Victor Eze";
//     public fName;
//     public lName;
// }
// Structural Directives
// @Component({
//     selector: 'my-tutorials',
//     template: `<h2>{{title}}</h2>
//                 <div *ngIf="showElement">Show Element</div>
//                 <div [ngSwitch]="color">
//                     <p *ngSwitchWhen="'red'">Red color is Shown</p>
//                     <p *ngSwitchWhen="'blue'">Blue color is Shown</p>
//                     <p *ngSwitchDefault>Invalid color is Shown</p>
//                 </div>
//                 <ul>
//                     <li *ngFor="let color of colors">{{color}}</li>
//                 </ul>`,
// })
// export class TutorialsComponent{
//     public title = "Tutorials from Victor Eze";
//     public showElement = false;
//     public color = 'green';
//     public colors = ['red', 'blue', 'green'];
// }
// Attribute Directives
// @Component({
//     selector: 'my-tutorials',
//     template: `<h2>{{title}}</h2>
//                 <button (click)="toggle();" >Toggle Button</button>
//                 <p [ngClass]="{classOne:cone,classTwo:ctwo}">ngClass Paragraph</p>
//                 <p [ngStyle]="{'font-style':style, 'font-size':size}">ngStyle Paragragh</p>`,
//     styles: [`
//             .classOne {
//                 color: white
//             }
//             .classTwo {
//                 background-color: black
//             }`]
// })
// export class TutorialsComponent{
//     public title = "Tutorials from Victor Eze";
//     public cone = true;
//     public ctwo = true;
//     public style = "italic"
//     public size = "36px"
//     toggle(){
//         this.cone = !this.cone;
//         this.ctwo = !this.ctwo;
//     }
// }
var TutorialsComponent = (function () {
    function TutorialsComponent() {
        this.childEvent = new core_2.EventEmitter();
    }
    TutorialsComponent.prototype.onChange = function (value) {
        this.childEvent.emit(value);
    };
    TutorialsComponent = __decorate([
        core_1.Component({
            selector: 'my-tutorials',
            template: "<h2>Child Tutorial Component</h2>\n                <label>Enter child TuttorialComponent Value</label>\n                <input type=\"text\" #childText (keyup)=\"onChange(childText.value)\">\n                <p>Value from Parent Component is</p>\n                {{parentData}}",
            inputs: ["parentData"],
            outputs: ["childEvent"]
        }), 
        __metadata('design:paramtypes', [])
    ], TutorialsComponent);
    return TutorialsComponent;
}());
exports.TutorialsComponent = TutorialsComponent;
//# sourceMappingURL=tutorials.component.js.map