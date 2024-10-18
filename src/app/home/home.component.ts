import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { SharedService } from '../shared.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
title = 'homePage';
showpic: boolean=false;

constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.showpic = this.sharedService.getBooleanValue(); 
  }

}
