import { RouterModule,Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BlogComponent } from './blog/blog.component';
import { DestinationsComponent } from './destinations/destinations.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';

export const routes: Routes = [
    { path:'login',component:LoginComponent},
    { path:'signup',component:SignUpComponent},
    { path:'dashboard',component:DashboardComponent},
    { path:'blog',component:BlogComponent},
    { path:'destinations',component:DestinationsComponent},
    { path:'home',component:HomeComponent},
    { path:'gallery',component:GalleryComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [BrowserModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }