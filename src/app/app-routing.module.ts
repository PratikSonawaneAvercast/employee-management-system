import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';
import { DeleteEmployeeComponent } from './employee/delete-employee/delete-employee.component';
import { EditEmployeeComponent } from './employee/edit-employee/edit-employee.component';
import { ListEmployeeComponent } from './employee/list-employee/list-employee.component';
import { ViewEmployeeComponent } from './employee/view-employee/view-employee.component';
import { LoginComponent } from './core/login/login.component';


const routes: Routes = [
  {path: 'login', component:LoginComponent,canActivate : []},
  { path: 'employee',
    children:[
      { path: '', component:ListEmployeeComponent,canActivate : []},
      { path: 'list', component:ListEmployeeComponent,canActivate : []},
      { path: 'delete/:id',component:DeleteEmployeeComponent,canActivate : []},
      { path: 'edit/:id', component:EditEmployeeComponent,canActivate : []},
      { path: 'view/:id', component:ViewEmployeeComponent,canActivate : []},
      { path: 'create', component:AddEmployeeComponent,canActivate : []}
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
