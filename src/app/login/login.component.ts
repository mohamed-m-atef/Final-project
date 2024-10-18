import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FormGroup, Validators, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';

import { SharedService } from '../shared.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] 
})
export class LoginComponent {

  usernameDash:string='';
  
  submitted: boolean = false;
  userform!: FormGroup;
  
  showPassword: boolean = false;
  
  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
  
  constructor(public router: Router, public fb: FormBuilder ,private sharedService: SharedService) {
    this.userform = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
    
  }

  onsubmit() {
    

    if (this.userform.valid) {
      const storedUsers = localStorage.getItem('users');
      const users = storedUsers ? JSON.parse(storedUsers) : [];

      console.log('Stored Users:', users); 

      const userExists = users.some((user: { username: string; pass: string }) => {
        return user.username === this.userform.get('username')?.value && user.pass === this.userform.get('password')?.value;
      });

      if (userExists) {

        const username = this.userform.get('username')?.value;
        localStorage.setItem('loggedInUser', username);

        this.userform.reset(); 
        this.router.navigate(['/home']); 
        this.sharedService.setBooleanValue(true);
       
        
      } else {
        alert("Invalid email or password");
      }
    } else {
      alert("Please fill all required fields correctly");
    }
    
  }

  showSignup() {
    this.router.navigate(['/signup']);
  }
 
}

