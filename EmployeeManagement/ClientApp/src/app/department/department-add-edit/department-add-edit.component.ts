import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Department } from '../../model/department.model';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-department-add-edit',
  templateUrl: './department-add-edit.component.html',
  styleUrls: ['./department-add-edit.component.css']
})
export class DepartmentAddEditComponent implements OnInit {
  departmentForm: FormGroup;
  isEdit: boolean;
  constructor(private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient) {}

  ngOnInit() {
    this.isEdit = this.route.snapshot.paramMap.has('id');
    if (this.isEdit) {
      const departmentId = +this.route.snapshot.paramMap.get('id');
      this.http.get<Department>('/api/department/' + departmentId).subscribe(result => {
        this.InitializeFormWithExistingData(result);
      });
    } else {
      this.InitializeForm();
    }
  }

  private InitializeForm(): void {
    this.departmentForm = this.fb.group({
      Id: ['', [
        Validators.required,
        Validators.pattern('^\d+$')
      ]],
      Name: ['', [
        Validators.required
      ]]
    });
  }

  private InitializeFormWithExistingData(department: Department): void {
    this.InitializeForm();
    this.departmentForm.setValue({
      Id: department.Id,
      Name: department.Name
    });
  }

  public SaveDepartment(department: Department): void {
    this.http.post('/api/department', {
      body: department
    });
  }

  public EditDepartment(department: Department): void {
    this.http.put('/api/department/' + department.Id, {
      body: department
    });
  }

  public Save(department: Department): void {
    if (this.isEdit) {
      this.EditDepartment(department);
    } else {
      this.SaveDepartment(department);
    }
    this.router.navigate(['/department']);
  }
}
