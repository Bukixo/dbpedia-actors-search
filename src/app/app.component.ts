import { Component } from '@angular/core';
import { DataService } from './data.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  //parseString = require('xml2js').parseString;
  //xml: any
  
  constructor( private dataService: DataService) {
    this.dataService = dataService
  }
data = this.dataService.getActors()


// register(form) {
//   console.log( form.value);
// }

  getValue(form){
    this.dataService.register(form);
 }


//  this.xml = "<root>Hello xml2js!</root>"
//  this.parseString(this.xml, function (err, result) {
//      console.dir(result);
//  });

 
}
