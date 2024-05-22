import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AdminAPIService } from '../adminAPIServices/admin-api.service';

@Component({
  selector: 'app-edit-admin',
  templateUrl: './edit-admin.component.html',
  styleUrls: ['./edit-admin.component.css']
})
export class EditAdminComponent implements OnInit {

  @Output() onAdminChange = new EventEmitter()

   editAdminStatus:boolean = false
  adminDetails:any ={}
  adminProfile:string = "https://png.pngtree.com/png-vector/20221124/ourmid/pngtree-recruitment-job-for-social-media-admin-png-image_6478542.png"

  constructor(private adminAPI:AdminAPIService){}
  ngOnInit(): void {
    this.adminAPI.getAdminDetails().subscribe((result:any)=>{
      this.adminDetails = result
      if(result.picture){
        this.adminProfile = result.picture
      }
    })
  }

  editAdminBtn(){
    this.editAdminStatus = true
  }
  cancel(){
    this.editAdminStatus=false
  }
  getFile(event:any){
    let uploadaFile = event.target.files[0]
    // this.adminProfile = URL.createObjectURL(uploadaFile)
    let fr = new FileReader()
    fr.readAsDataURL(uploadaFile)
    fr.onload = (event:any)=>{
      this.adminProfile = event.target.result
      this.adminDetails.picture = this.adminProfile

    }
   
    console.log(this.adminDetails);
    
  }
  updateAdmin(){
    this.adminAPI.updateAdminDetails(this.adminDetails).subscribe({
      next:(result:any)=>{
        this.editAdminStatus = false
        alert("updated successfully!!!")
        sessionStorage.setItem("adminDetails",JSON.stringify(result))
        this.onAdminChange.emit(result.name)

      },
      error:(reason:any)=>{
        console.log(reason);
        alert("updation failed...please try after some time!!!")
        
      }
    })
  }

}
