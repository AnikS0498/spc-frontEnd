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


const appRoutes: Routes = [
  { path: 'login/admin', component: LoginPageComponent },
  // { path: '', component: HomeComponent },
  { path: 'login/teacher', component: LoginPageComponent },
  { path: 'login/parent', component: LoginPageComponent  },
  { path: 'login/accountant', component: LoginPageComponent  },
  { path: '', component: CarouselComponent }
  // { path: 'servers/:id/edit', component: EditServerComponent  }  
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
    FeaturettesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    TeacherModule,
    AccountantModule,
    ParentModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
