import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AgreementComponent } from './agreement/agreement.component';
import { HomeComponent } from './home/home.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { AddNDAComponent } from './add-nda/add-nda.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'home', component: HomeComponent },
  { path: 'agreement', component: AgreementComponent},
  { path: 'login', component: LoginComponent},
  { path: 'transactions', component: TransactionsComponent},
  { path: 'add-nda', component: AddNDAComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
