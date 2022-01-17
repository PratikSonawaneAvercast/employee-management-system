import { Component, ElementRef, OnInit, ViewChild,Inject} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { EmployeeService } from 'src/app/services/employee.service';
import { DialogService } from 'src/app/shared/dialog.service';
import { ToastrService } from 'ngx-toastr';

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
  toastLiveExample = document.getElementById('liveToast')


  //(keyup)="applyFilter($event.target.value)" 

  //type casting
  sortedData: any[] = [];

  constructor(private employeeService:EmployeeService,
    private dialogService : DialogService,
    private toastr : ToastrService) { }

  ngOnInit(): void {
      this.employeeService.listEmployee().subscribe((data:any)=>{
      this.sortedData = data;
      this.dataSource = new MatTableDataSource(this.sortedData);
      console.log(this.sortedData);
      });      
  }

  applyFilter(event: any) :void{
    const filterValue = event.target.value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deleteEmployee(element:any): void{
    this.dialogService.openConfirmDialog()
    .afterClosed().subscribe(res =>{
      if(res){
        this.employeeService.deleteEmployee(element.id).subscribe(res=>{
          this.sortedData = this.sortedData.filter(d=> d.id!== element.id);
          this.dataSource = new MatTableDataSource(this.sortedData);
          this.toastr.success("Deleted successfully!")
        }) 
      }
      console.log(res);
    });
  } 
}


