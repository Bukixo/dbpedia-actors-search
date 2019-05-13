import { Injectable } from '@angular/core';
import { getLocaleDateFormat } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private actors: any
  private parser: any
  private xmlDoc : any
  private data: any
  private text: any

  getActors() {
      this.text = "<bookstore><book>" +
      "<title>Everyday Italian</title>" +
      "<author>Giada De Laurentiis</author>" +
      "<year>2005</year>" +
      "</book></bookstore>";

    this.parser = new DOMParser();
    this.xmlDoc = this.parser.parseFromString(this.text, "text/xml");
    this.data = this.xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;
    
    return this.data
  }


}
