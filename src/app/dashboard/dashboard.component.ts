import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { PostComponent } from '../post/post.component';
import { RouterLink } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { Router, RouterOutlet } from '@angular/router';






@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [LoginComponent,PostComponent,RouterLink,HomeComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  username:string=''

    ngOnInit(): void {
   const storedUsername = localStorage.getItem('loggedInUser');
    if (storedUsername) {
      this.username = storedUsername;  // Retrieve the username from localStorage
    }
  }
  constructor(public router: Router){
  }
  toHome(){
     this.router.navigate(['/home'])
  }
}
