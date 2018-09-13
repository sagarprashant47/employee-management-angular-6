import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeAddEditComponent } from './employee-add-edit/employee-add-edit.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { Routes, RouterModule } from '@angular/router';
import { EditEmployeeGuard } from './edit-employee.guard';
import { SaveEditEmployeeGuard } from './save-edit-employee.guard';
import { CoreModule } from '../core/core.module';
import { EmployeeGenderPipe } from './employee-gender.pipe';

const routes: Routes = [{
  path: 'employees', component: EmployeeListComponent,
  children: [{
    path: 'add', component: EmployeeAddEditComponent
  }, {
    path: 'edit/:id',
    component: EmployeeAddEditComponent,
    canActivate: [EditEmployeeGuard],
    canDeactivate: [SaveEditEmployeeGuard]
  }, {
    path: 'detail/:id',
    component: EmployeeDetailsComponent,
    canActivateChild: [EditEmployeeGuard]
  }]
} ];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CoreModule
  ],
  declarations: [EmployeeListComponent, EmployeeAddEditComponent, EmployeeDetailsComponent, EmployeeGenderPipe]
})
export class EmployeeModule { }
