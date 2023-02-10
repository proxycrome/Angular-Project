import { Component } from '@angular/core';
import { TutorialsComponent } from './tutorials.component';

@Component({
  selector: 'my-app',
  template: `<h1>Hello World from Victor</h1>
             <h4>Header 4 from App Component</h4>
             <my-tutorials></my-tutorials>`,
  styles: [`h4 {
    color: blue;
  }`],
  directives: [TutorialsComponent]
})

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

export class AppComponent { }
