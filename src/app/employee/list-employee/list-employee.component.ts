import { Component, ElementRef, OnInit, ViewChild,Inject} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { EmployeeService } from 'src/app/services/employee.service';
import { DialogService } from 'src/app/shared/dialog.service';

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
  dataSource: MatTableDataSource<any> = new MatTableDataSource()
  dataSource1 = ELEMENT_DATA;

  //(keyup)="applyFilter($event.target.value)" 

  //type casting
  listEmployee: Employee[] = [];

  constructor(private employeeService:EmployeeService,
    private dialogService : DialogService) { }

  ngOnInit(): void {
      this.employeeService.listEmployee().subscribe((data:any)=>{
      this.dataSource = new MatTableDataSource(data);
      this.dataSource1 = data;
      });      
  }

  applyFilter(value: string) {
    document.getElementById('xyz');
    this.dataSource.filter = value.trim().toLocaleLowerCase();
    const filterValue = value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  clickMethod(){
    this.dialogService.openConfirmDialog();
  }

  
}
