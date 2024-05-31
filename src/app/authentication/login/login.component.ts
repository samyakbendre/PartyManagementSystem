import { Component,OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms'
import { ApiServiceService } from '../../../services/api-service.service';
import { Router } from '@angular/router';
import { TokenServiceService } from '../../../services/token-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  loginForm : FormGroup;

  constructor(private apiService:ApiServiceService,private router:Router, private tokenService:TokenServiceService){
    this.loginForm = new FormGroup({
        username : new FormControl('',[Validators.required]),
        password : new FormControl('',[Validators.required])
      }
    )
  }

  hide : boolean = false;
  errorMsg : string = ''

  ngOnInit(){

  }

  onLogin(){
    this.markFormGroupTouched(this.loginForm)
    if(this.loginForm.invalid){
      return 
    }
    let loginObj = {
      username : this.loginForm.get('username')?.value,
      password : this.loginForm.get('password')?.value
    }

    this.apiService.login(loginObj).subscribe((response:any)=>{
      if(response.user){
        this.router.navigate(['/party-details-list'])
        this.tokenService.saveToken(response.token)
      }
    },(error)=>{
      if(error.error.User == false){
        this.errorMsg = 'Invalid Username!'
      }
    })
  }

  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      } else {
        control.markAsTouched();
      }
    });
  }
}
