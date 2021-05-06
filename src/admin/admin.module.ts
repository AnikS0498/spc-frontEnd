import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin-component/admin.component';
import { RouterModule } from '@angular/router';
import { AdminGetAllParentsComponent } from './admin-get-all-parents/admin-get-all-parents.component';



@NgModule({
  declarations: [
    AdminComponent,
    AdminGetAllParentsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path:'admin', component:AdminComponent },
      { path:'admin/getAllParents', component:AdminGetAllParentsComponent }
    ])
  ]
})
export class AdminModule { }
