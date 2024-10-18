import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FormGroup , Validators ,FormBuilder , ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule ,ReactiveFormsModule ,CommonModule,RouterLink],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

  userform!: FormGroup;

  // Eye in the password input 

  showPassword:boolean =false;
  showConfirmPassword:boolean=false;

  togglePasswordVisibility(): void {
   this.showPassword = !this.showPassword;
 }
  toggleConfirmPasswordVisibility(): void {
   this. showConfirmPassword = !this. showConfirmPassword;
 }

  ////////////////////////////////////////////////////


  
  constructor(public router: Router , public fb:FormBuilder){
    
   this.userform =this.fb.group({
      username:['',[Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
      password:['',[Validators.required ,Validators.minLength(8)]],
      confirm_pass:['',[Validators.required , Validators.minLength(8)]]
    });

  }



    

  users: { username: string; pass: string }[] = []; //array to store data of users 


  onsubmit(){


    if(this.userform.valid){

      const data={
  
      username: this.userform.get('username')?.value,      
      pass: this.userform.get('password')?.value,
      confirm_pass: this.userform.get('confirm_pass')?.value
        
      };
      
      if(data.pass==data.confirm_pass){
        const storedUsers = localStorage.getItem('users');
        let users = storedUsers ? JSON.parse(storedUsers) : [];
        
       
        users.push(data);
        
        // Save the updated array to local storage
        localStorage.setItem('users', JSON.stringify(users));
        
        
        this.userform.reset();

        console.log(users);

        this.router.navigate(['/login'])
        
      }else {
        alert("Password not match")
        
         this.userform.get('confirm_pass')?.reset(); 
      }
      
    }
    else {
      alert("Please fill all required fields correctly");
    }
  }
    
   
  


  showLogin(){
    this.router.navigate(['/login'])
   
  }

}
