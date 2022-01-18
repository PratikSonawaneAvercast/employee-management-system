import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from 'src/app/services/employee.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  addEmployeeForm: FormGroup = new FormGroup({});

  constructor(
    private formBuilder:FormBuilder,
    private employeeService:EmployeeService,
    private toastr : ToastrService) { }

  ngOnInit(): void {
    this.addEmployeeForm = this.formBuilder.group({
        'username': new FormControl('',[Validators.required, Validators.minLength(3)]),
        'email': new FormControl('',[Validators.required, Validators.email]),
        'phone': new FormControl('', [Validators.required, Validators.maxLength(10)])
    })
  }

  createEmpAccount(): void{
    this.employeeService.addEmployee(this.addEmployeeForm.value).subscribe(data =>{
      this.toastr.success("Employee details updated successfully!")
    }, err=>{
      this.toastr.error("Login Failure!")
      }
    )
    //console.log(this.addEmployeeForm.value); 
  }

}
