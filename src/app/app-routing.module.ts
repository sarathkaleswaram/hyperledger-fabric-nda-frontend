import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AgreementComponent } from './agreement/agreement.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'agreement', component: AgreementComponent},
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent },
  { path: '', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
