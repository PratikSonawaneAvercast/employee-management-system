import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})

export class EditEmployeeComponent implements OnInit {

  employeeId : any;
  employeeDetails: any;
  editEmployeeForm: FormGroup = new FormGroup({});
  dataLoaded: boolean = false;
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private employeeService: EmployeeService,
    private formBuilder: FormBuilder,
    private toastr : ToastrService) { }

  ngOnInit(): void {
    //to check the data loaded
    this.dataLoaded = false;

    //fetching the user id 
    this.activatedRoute.params.subscribe(data=> {
      this.employeeId = data.id;
    });

    //fetching the user details from id
    if(this.employeeId!= ''){
      this.employeeService.viewEmployee(this.employeeId)
      .toPromise() //to get the data only once
      .then(data=>{
          //fetching the data and assign to object
          this.employeeDetails = data;
          Object.assign(this.employeeDetails, data);
          //console.log(this.employeeDetails);
          // Buid the edit form
          this.editEmployeeForm = this.formBuilder.group({
            'username': new FormControl(this.employeeDetails.name,[Validators.required, Validators.minLength(3)]),
            'email': new FormControl(this.employeeDetails.email,[Validators.required, Validators.email]),
            'phone': new FormControl(this.employeeDetails.phone, [Validators.required, Validators.maxLength(10)])
          })
          this.dataLoaded = true;
      }) 
      .catch(err=>{
        console.log(err);
      })
    }
  }

  updateEmployee(){
    this.employeeService.updateEmployee(this.employeeId, this.editEmployeeForm.value).subscribe(data =>{
      this.toastr.success("Employee updated successfully")
    }, err=>{
      this.toastr.success("Something went wrong try agian later!")
      }
    )
  }
}
