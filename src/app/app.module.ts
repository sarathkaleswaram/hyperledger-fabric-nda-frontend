import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { MatFormFieldModule, MatInputModule, MatCardModule, MatButtonModule, MatDialogModule, MatTableModule } from '@angular/material';
import { AgreementComponent } from './agreement/agreement.component';
import { HomeComponent } from './home/home.component';
import { APIService } from './services/api.service';
import { TransactionsComponent } from './transactions/transactions.component';
import { SignaturePadModule } from 'angular2-signaturepad';
import { AddNDAComponent } from './add-nda/add-nda.component';
import { AuthGuard } from './services/auth-guard.service';
import { AgreementPrintComponent } from './agreement-print/agreement-print.component';
import { PDFExportModule } from '@progress/kendo-angular-pdf-export';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AgreementComponent,
    AgreementPrintComponent,
    HomeComponent,
    TransactionsComponent,
    AddNDAComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatFormFieldModule, 
    MatInputModule, 
    MatCardModule, 
    MatButtonModule,
    MatDialogModule,
    MatTableModule,
    SignaturePadModule,
    PDFExportModule
  ],
  providers: [APIService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
