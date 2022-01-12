import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {

  employeeId: string = '';
  employeeDetails: any;

  constructor(private employeeService: EmployeeService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    //fetching the employee id from route
    this.activatedRoute.params.subscribe(data => {
      this.employeeId = data.id;
    })
    this.employeeService.viewEmployee(this.employeeId).subscribe(data => {
      this.employeeDetails = data;
    });
  }

}
