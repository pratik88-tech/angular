import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path:'',component:LoginComponent,pathMatch:'full'},
  {
    path:'dashboard',
    component:DashboardComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'blog-list',
    component:BlogListComponent,
    canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
