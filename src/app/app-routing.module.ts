import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AgreementComponent } from './agreement/agreement.component';
import { HomeComponent } from './home/home.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { AddNDAComponent } from './add-nda/add-nda.component';
import { AuthGuard } from './services/auth-guard.service';
import { AgreementPrintComponent } from './agreement-print/agreement-print.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', canActivate: [AuthGuard], component: HomeComponent },
  { path: 'agreement', canActivate: [AuthGuard], component: AgreementComponent },
  { path: 'agreement-print', canActivate: [AuthGuard], component: AgreementPrintComponent },
  { path: 'transactions', canActivate: [AuthGuard], component: TransactionsComponent },
  { path: 'add-nda', canActivate: [AuthGuard], component: AddNDAComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
