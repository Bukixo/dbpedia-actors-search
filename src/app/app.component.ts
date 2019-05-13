import { Component } from '@angular/core';
import { DataService } from './data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor( private dataService: DataService) {
    this.dataService = dataService
  }
actors = this.dataService.getActors()

register(form) {
  console.log(form.value);
}
}
