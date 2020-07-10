import { Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';

declare  var  google:  any;

@Injectable({
   providedIn: 'root'
 //providedIn: ServiceModule
})
export class GoogleChartService {
  private google : any;
  constructor() { 
    this.google = google;
  }

  getGoogle(){
    return this.google;
  }
}
