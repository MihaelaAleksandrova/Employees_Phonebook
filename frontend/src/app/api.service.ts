import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_SERVER = "http://localhost:3000";

  constructor(private httpClient: HttpClient) { }

  public readEmployees(){
    return this.httpClient.get<Employee[]>(`${this.API_SERVER}/employees`);
  }

  public createEmployee(employee: Employee){
    return this.httpClient.post<Employee>(`${this.API_SERVER}/employees/create`, employee);
  }

  public updateEmployee(employee: Employee){
    return this.httpClient.put<Employee>(`${this.API_SERVER}/employees/${employee.id}/update`, employee);
  }

  public deleteEmployee(id: number){
    return this.httpClient.delete(`${this.API_SERVER}/employees/${id}/delete`);
  }

  
}
