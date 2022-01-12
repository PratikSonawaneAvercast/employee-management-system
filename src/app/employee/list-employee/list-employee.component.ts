import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeService } from 'src/app/services/employee.service';

export interface Employee {
  name: string;
  id: number;
  username: string;
  email: string;
}

const ELEMENT_DATA: Employee[] = [];

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})

export class ListEmployeeComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'username', 'email', 'actions'];
  dataSource = ELEMENT_DATA;

  //type casting
  listEmployee: Employee[] = [];

  constructor(private employeeService:EmployeeService) { }

  ngOnInit(): void {
      this.employeeService.listEmployee().subscribe(data=>{
      this.dataSource = data;
      });
  }

}
