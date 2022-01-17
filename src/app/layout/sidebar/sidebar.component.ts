import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit {

  constructor(private toastr : ToastrService) { }

  ngOnInit(): void {

  }

  logout() : void{
    localStorage.removeItem("token")
    this.toastr.success("Logout successful!")
    console.log("logout"); 
  }
  
}

