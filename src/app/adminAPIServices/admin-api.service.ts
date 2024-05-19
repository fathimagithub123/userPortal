
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminAPIService {
  server_url:string ="http://localhost:3000"

  constructor(private http:HttpClient,private router:Router) { }

  authenticateAPI(email:string,password:string){

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
  getAdminDetails(){
    return this.http.get(`${this.server_url}/users/1`)
  }
}