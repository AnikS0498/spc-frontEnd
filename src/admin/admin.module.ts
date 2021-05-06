import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin-component/admin.component';
import { RouterModule } from '@angular/router';
import { AdminGetAllParentsComponent } from './admin-get-all-parents/admin-get-all-parents.component';
import { AdminGetAllTeachersComponent } from './admin-get-all-teachers/admin-get-all-teachers.component';



@NgModule({
  declarations: [
    AdminComponent,
    AdminGetAllParentsComponent,
    AdminGetAllTeachersComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path:'admin', component:AdminComponent },
      { path:'admin/getAllParents', component:AdminGetAllParentsComponent },
      { path:'admin/getAllTeachers', component:AdminGetAllTeachersComponent }
    ])
  ]
})
export class AdminModule { }
