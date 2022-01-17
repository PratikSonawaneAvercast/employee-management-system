import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SignInData } from '../model/signInData';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  baseUrl = "https://reqres.in/api/login/" 

  constructor(private http:HttpClient) { }

  redirectUrl: string | undefined;
  
  loginApi(email: string, password: string){
 
      console.log(email, password);
      
      return this.http.post<any>(`${this.baseUrl}`,{email:email,password:password})
      .pipe(map(user => {
        if(user && user.token) {
            localStorage.setItem('currentUser',JSON.stringify(user));
            
        }
      }),
      catchError(this.handleError)
      );
  }  
  
  handleError(handleError: any): import("rxjs").OperatorFunction<unknown, unknown> {
    throw new Error('Method not implemented.'); 
  }

  // getAuthorizationToken(){
  //   const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  //   return currentUser.token;
  // }

  isLoggedIn(){
    if(localStorage.getItem('currentUser')){
      return true;
    }
    return false;
  }

  logout(){
    localStorage.removeItem('currentUser')
  }

  login(data: any):Observable<any>{
    return this.http.post(this.baseUrl,data);
  }

}
function catchError(handleError: any): import("rxjs").OperatorFunction<unknown, unknown> {
  throw new Error('Function not implemented.');
}

