import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SignInData } from 'src/app/model/signInData';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoginError : boolean = false;

  constructor(private authenticationService: AuthenticationService, 
    private router : Router) { }

  ngOnInit(): void {
  }

 // onSubmit(signInForm: NgForm){
    onSubmit(signInForm: NgForm){
    const signInData = new SignInData(signInForm.value.email, signInForm.value.password);
    // this.authenticationService.loginApi(signInForm.value.email,signInForm.value.password).subscribe((data:any)=>
    // {
    //   localStorage.setItem('token',data.access_token);
    //   this.router.navigate(['/employee']);
    // },
    // (err : HttpErrorResponse)=> {
    //   this.isLoginError = true;
    // });
    
    //this.router.navigateByUrl('/employee/list');
    this.authenticationService.login(signInData).subscribe(result=>{
      if(result.token){
        console.log(result.token);
        // const redirect = this.authenticationService.redirectUrl ? this.authenticationService.redirectUrl : 'employee';
        // this.router.navigate([redirect])
        //this.router.navigate(['employee']);
        try{
          localStorage.setItem("token", result.token);
          this.router.navigate(['/employee','list']);
        }catch(e:any){
            console.log(e);
        };
        //alert(result.token);
      }
    },(err: HttpErrorResponse)=>{
      this.isLoginError = true;
    })
  }
}
