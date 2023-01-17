import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'name',
    'title',
    'email',
    'phone',
    'address',
    'city',
    'actions',
  ];
  // dataSource = [];
  // employee = {};
  dataSource: any[] = [];
  employee: any = {};
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.readEmployees().subscribe((result) => {
      console.log(result);
      this.dataSource = result;
    });
  }

  selectEmployee(employee: any) {
    this.employee = employee;
    console.log('selected: ', this.employee);
  }

  newEmployee() {
    this.employee = {};
  }

  createEmployee(f: any) {
    console.log('form value: ', f.value);
    this.apiService.createEmployee(f.value).subscribe((result) => {
      console.log(result);
      location.reload()
    });
  }

  deleteEmployee(id: any) {
    this.apiService.deleteEmployee(id).subscribe((result) => {
      console.log(result);
      location.reload()
    });
  }

  updateEmployee(f: any) {
    console.log('Update', f.value);
    f.value.id = this.employee['id'];
    this.apiService.updateEmployee(f.value).subscribe((result) => {
      console.log(result);
      location.reload()
    });
  }
}
