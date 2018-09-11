import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentAddEditComponent } from './department-add-edit/department-add-edit.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { EditDepartmentGuard } from './edit-department.guard';
import { SaveEditDepartmentGuard } from './save-edit-department.guard';
import { Routes, RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { DepartmentComponent } from './department.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: 'department',
    component: DepartmentComponent,
    children: [
      {
        path: '',
        component: DepartmentListComponent
      },
      {
        path: 'add',
        component: DepartmentAddEditComponent
      },
      {
        path: 'edit/:id',
        component: DepartmentAddEditComponent,
        canActivateChild: [EditDepartmentGuard],
        canDeactivate: [SaveEditDepartmentGuard]
      },
      {
        path: 'details/:id',
        component: DepartmentDetailsComponent,
        canActivateChild: [EditDepartmentGuard]
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    CoreModule,
    HttpClientModule
  ],
  exports: [RouterModule],
  declarations: [
    DepartmentComponent,
    DepartmentListComponent,
    DepartmentAddEditComponent,
    DepartmentDetailsComponent
  ]
})
export class DepartmentModule {}
