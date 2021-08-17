import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './Guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SignupComponent } from './signup/signup.component';
import { UnautherizedUserComponent } from './unautherized-user/unautherized-user.component';
import { UserListComponent } from './user-list/user-list.component';
import { SiteLayoutComponent } from './_Layout/site-layout/site-layout.component';



const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: LoginComponent, pathMatch: 'full' }
    ]
  },
  {
    path: '',
    canActivate: [
      AuthGuard
    ],
    component: SiteLayoutComponent,
    children: [
      { path: 'home', component: HomeComponent }
    ]
  },  
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: '',
    canActivate: [
      AuthGuard
    ],
    component: SiteLayoutComponent,
    children: [
      { path: 'users', component: UserListComponent }
    ]
  },
  {
    path: 'notfound',
    component: PageNotFoundComponent,
  },
  {
    path: 'unauthorized',
    component: UnautherizedUserComponent,
  },
  { path: '**', redirectTo: '/notfound' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
