import { Injectable } from '@angular/core';
import { getLocaleDateFormat } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private actors: any

  getActors() {
    this.actors = [
      {
        "name": "Halle Berry",
        "movies": ["Frankie_&_Alice", "The_Flintstones_(film)", "Monster's_Ball"]
      }
    ]
    return this.actors
  }
}
