import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from '../admin/admin.module';
import { TeacherModule } from '../teacher/teacher.module';
import { AccountantModule } from '../accountant/accountant.module';
import { ParentModule } from '../parent/parent.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    TeacherModule,
    AccountantModule,
    ParentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
