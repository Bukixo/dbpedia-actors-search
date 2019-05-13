import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { readPatchedData } from '@angular/core/src/render3/util';
import { TitleCasePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private actors: any
  private parser: any
  private xmlDoc : any
  private data: any
  private text: any
  private form: any


  

  apiUrl = `http://dbpedia.org/page/${this.text}`



  constructor(private http: HttpClient) {}


  getActors() {
    

      // this.text = "<bookstore><book>" +
      // "<title>Everyday Italian</title>" +
      // "<author>Giada De Laurentiis</author>" +
      // "<year>2005</year>" +
      // "</book></bookstore>";

    this.parser = new DOMParser();
    this.xmlDoc = this.parser.parseFromString(this.apiUrl, "text/xml");
    // this.data = this.xmlDoc.getAttribute("rev")[0].childNodes[0].nodeValue;
    return this.data
  }
//   titleCase(str) {
//    var splitStr = str.toLowerCase().split(' ');
//    for (var i = 0; i < splitStr.length; i++) {
//        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
//    }
//    // Directly return the joined string
//    return splitStr.join(' '); 
// }
  register(form) {
    this.form = form.value[Object.keys(form.value)[0]];
    this.actors = this.form.replace(/\s/g, "_")
    this.text = this.actors.charAt(0).toUpperCase() +this.actors.slice(1);
    console.log(this.form, `http://dbpedia.org/page/${this.text}`);
  }

}
