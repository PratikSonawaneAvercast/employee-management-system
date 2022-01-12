import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';
import { DeleteEmployeeComponent } from './employee/delete-employee/delete-employee.component';
import { EditEmployeeComponent } from './employee/edit-employee/edit-employee.component';
import { ListEmployeeComponent } from './employee/list-employee/list-employee.component';
import { ViewEmployeeComponent } from './employee/view-employee/view-employee.component';


const routes: Routes = [
  { path: 'employee',
    children:[
      { path: '', component:ListEmployeeComponent},
      { path: 'list', component:ListEmployeeComponent},
      { path: 'delete/:id',component:DeleteEmployeeComponent},
      { path: 'edit/:id', component:EditEmployeeComponent},
      { path: 'view/:id', component:ViewEmployeeComponent},
      { path: 'create', component:AddEmployeeComponent},
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
