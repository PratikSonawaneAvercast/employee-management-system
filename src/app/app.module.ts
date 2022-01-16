import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeDashboardComponent } from './Feature/employee-dashboard/employee-dashboard.component';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule} from '@angular/material/sidenav';
import { LayoutModule } from './layout/layout.module';
import { EmployeeModule } from './employee/employee.module';
import { HttpClientModule } from '@angular/common/http';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule} from '@angular/material/button';
import { MatTableModule} from '@angular/material/table';
import { LoginComponent } from './core/login/login.component';
import { MatDialogModule} from '@angular/material/dialog';
import { DeleteConfirmationDailogComponent } from './shared/delete-confirmation-dailog/delete-confirmation-dailog.component';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeDashboardComponent,
    LoginComponent,
    DeleteConfirmationDailogComponent,
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    LayoutModule,
    EmployeeModule,
    HttpClientModule,
    MatListModule,
    MatButtonModule,  
    MatTableModule,
    MatDialogModule,
    MatIconModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DeleteConfirmationDailogComponent]
})
export class AppModule { }
