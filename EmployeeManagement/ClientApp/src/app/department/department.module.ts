import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentAddEditComponent } from './department-add-edit/department-add-edit.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { EditDepartmentGuard } from './edit-department.guard';
import { SaveEditDepartmentGuard } from './save-edit-department.guard';
import { Routes, RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';

const routes: Routes = [{
  path: 'departments', component: DepartmentListComponent
}, {
  path: 'department/add', component: DepartmentAddEditComponent
}, {
  path: 'department/edit/:id',
  component: DepartmentAddEditComponent,
  canActivateChild: [EditDepartmentGuard],
  canDeactivate: [SaveEditDepartmentGuard]
}, {
  path: 'department/:id',
  component: DepartmentDetailsComponent,
  canActivateChild: [EditDepartmentGuard]
}];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CoreModule
  ],
  declarations: [DepartmentListComponent, DepartmentAddEditComponent, DepartmentDetailsComponent]
})
export class DepartmentModule { }
