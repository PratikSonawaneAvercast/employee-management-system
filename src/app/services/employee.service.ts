import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';
import { Employee } from '../employee/list-employee/list-employee.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {
  //base url for crud operation
  baseUrl: string = 'https://jsonplaceholder.cypress.io/';

  constructor(private http: HttpClient) {}

    //fetch list
    listEmployee(): Observable<Employee[]>{
       return this.http.get<Employee[]>(this.baseUrl +'users')
    }
    
    viewEmployee(id: string){
      return this.http.get(this.baseUrl +'users/' + id)
    }

    addEmployee(empObj:any){
      return this.http.post(this.baseUrl +'users/',empObj);
    }

    deleteEmployee(id: any){
      return this.http.delete(this.baseUrl +'users/' + id)
    }

    updateEmployee(id: any, empObj: any){
      return this.http.put(this.baseUrl +'users/'+id,empObj);
    }

}
