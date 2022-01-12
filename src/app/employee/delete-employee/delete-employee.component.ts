import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {

  employeeId: string = '';

  //activatedRoute to capture the id
  constructor(private activatedRoute: ActivatedRoute,
    private employeeService: EmployeeService,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.employeeId = data.id;
    });

    if(this.employeeId){
      this.employeeService.deleteEmployee(this.employeeId).subscribe(data => {
      this._snackBar.open("Employee deleted successfully")
      }, err => {
        this._snackBar.open("Unable to delete employee  ")
      })
    }

  }

}
