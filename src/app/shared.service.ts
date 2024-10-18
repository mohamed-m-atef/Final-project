import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

   private showpic: boolean = false;

  // Method to set the value
  setBooleanValue(value: boolean) {
    this.showpic = value;
  }

  // Method to get the value
  getBooleanValue(): boolean {
    return this.showpic;
  }
}
