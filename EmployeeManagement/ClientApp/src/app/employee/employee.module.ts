import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeAddEditComponent } from './employee-add-edit/employee-add-edit.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { Routes, RouterModule } from '@angular/router';
import { EditEmployeeGuard } from './edit-employee.guard';
import { SaveEditEmployeeGuard } from './save-edit-employee.guard';
import { CoreModule } from '../core/core.module';

const routes: Routes = [{
  path: 'employees', component: EmployeeListComponent
}, {
  path: 'employee/add', component: EmployeeAddEditComponent
}, {
  path: 'employee/edit/:id',
  component: EmployeeAddEditComponent,
  canActivateChild: [EditEmployeeGuard],
  canDeactivate: [SaveEditEmployeeGuard]
}, {
  path: 'employee/:id',
  component: EmployeeDetailsComponent,
  canActivateChild: [EditEmployeeGuard]
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CoreModule
  ],
  declarations: [EmployeeListComponent, EmployeeAddEditComponent, EmployeeDetailsComponent]
})
export class EmployeeModule { }
