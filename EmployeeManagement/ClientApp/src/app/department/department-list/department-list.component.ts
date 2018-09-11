import { Component, OnInit } from '@angular/core';
import { Department } from '../../model/department.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {
  departmentList: Department[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<Department[]>('/api/departments').subscribe(result => {
      this.departmentList = result;
    });
  }

}
