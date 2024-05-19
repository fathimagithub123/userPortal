import { Component, OnInit } from '@angular/core';
import { AdminAPIService } from '../adminAPIServices/admin-api.service';

@Component({
  selector: 'app-edit-admin',
  templateUrl: './edit-admin.component.html',
  styleUrls: ['./edit-admin.component.css']
})
export class EditAdminComponent implements OnInit {
  editAdminStatus:boolean = false
  adminDetails:any ={}
  adminProfile:string = "https://png.pngtree.com/png-vector/20221124/ourmid/pngtree-recruitment-job-for-social-media-admin-png-image_6478542.png"

  constructor(private adminAPI:AdminAPIService){}
  ngOnInit(): void {
    this.adminAPI.getAdminDetails().subscribe((result:any)=>{
      this.adminDetails = result
    })
  }

  editAdminBtn(){
    this.editAdminStatus = true
  }
  cancel(){
    this.editAdminStatus=false
  }

}
