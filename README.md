<!-- import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminapiService {
  server_url:string ="http://localhost:3000"

  constructor(private http:HttpClient,private router:Router) { }

  authenticate(email:string,password:string){

     return this.http.get(`${this.server_url}/users/1`).subscribe((result:any)=>{
      if(result.email==email && result.password==password){
        sessionStorage.setItem("adminDetails",JSON.stringify(result))
       alert ("Login Success")
       this.router.navigateByUrl('dashboard')
      }else{
           alert("Invalid/password")
      }
    })
  }
} -->........adminapi.services



<!-- 
import { Component } from '@angular/core';
import { adminAPI } from '../adminAPIServices/adminapi.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
email:string=""
password:string=""

constructor(private adminAPI:AdminAPIServices){}


login(){
  if(this.email && this.password){
    //call api
    this.adminAPI.authenticateAPI(this.email,this.password)
  }else{
    alert("Please fill the form completly")
  }
}
}
 --> login.compnent.ts

 <!-- import { Component } from '@angular/core';
import { userModel } from '../../users.model';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  user:userModel = {}

} -->

add.user.component



export class userModel{
    id?:string
    name?:string
    email?:string
    status?:string
}  users.model.ts



import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminapiService {
  server_url:string ="http://localhost:3000"

  constructor(private http:HttpClient,private router:Router) { }

  authenticate(email:string,password:string){

     return this.http.get(`${this.server_url}/users/1`).subscribe((result:any)=>{
      if(result.email==email && result.password==password){
        sessionStorage.setItem("adminDetails",JSON.stringify(result))
       alert ("Login Success")
       this.router.navigateByUrl('dashboard')
      }else{
           alert("Invalid/password")
      }
    })
  }
}  admin.api.servyces
