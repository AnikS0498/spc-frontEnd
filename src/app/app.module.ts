import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from '../admin/admin.module';
import { TeacherModule } from '../teacher/teacher.module';
import { AccountantModule } from '../accountant/accountant.module';
import { ParentModule } from '../parent/parent.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { SchoolImageComponent } from './header/school-image/school-image.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselComponent } from './carousel/carousel.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { FeaturettesComponent } from './featurettes/featurettes.component';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

import { ContactUsComponent } from './contact-us/contact-us.component';



const appRoutes: Routes = [
  { path: 'login/admin', component: LoginPageComponent },
  // { path: '', component: HomeComponent },
  { path: 'login/teacher', component: LoginPageComponent },
  { path: 'login/parent', component: LoginPageComponent },
  { path: 'login/accountant', component: LoginPageComponent },
  { path: '', component: CarouselComponent },
  { path: '', component: CarouselComponent },
  { path: 'aboutus', component: AboutComponent },
  { path: 'contactus', component: ContactUsComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    SchoolImageComponent,
    CarouselComponent,
    LoginComponent,
    AboutComponent,
    LoginPageComponent,
    FeaturettesComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    TeacherModule,
    AccountantModule,
    ParentModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
