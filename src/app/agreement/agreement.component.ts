import { Component, OnInit, QueryList, ViewChildren, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { APIService } from '../services/api.service';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';


@Component({
  selector: 'app-agreement',
  templateUrl: './agreement.component.html',
  styleUrls: ['./agreement.component.scss']
})
export class AgreementComponent implements OnInit {

  @ViewChild(SignaturePad, { static: true }) signaturePad: SignaturePad; 
  public signaturePadOptions: Object = {
    'minWidth': 1,
    'canvasWidth': 350,
    'canvasHeight': 200
  };
  agreementsign: string = "";
  showSpinner: boolean = false;
  nda: any = {};

  constructor(private fb: FormBuilder, private router: Router, private apiService:APIService) {
  }

  ngOnInit() {
    this.nda = JSON.parse(localStorage.getItem("nda"));
    if (this.nda == null) {
      alert("NDA not initialized to your accout.");
      this.router.navigate(["/home"]);
    }
  }

  ngAfterViewInit() {
    this.signaturePad.set('minWidth', 1);
    this.signaturePad.clear();
  }
 
  drawComplete() {
    this.agreementsign = this.signaturePad.toDataURL();
  }

  submit():void {
    this.showSpinner = true;
    this.nda.agreementsign = this.agreementsign;
    this.nda.enrollmentID = localStorage.getItem("enrollmentID");
    this.apiService.submitNDA(this.nda).subscribe((data: any) => {
      this.showSpinner = false;
      if (data.status == "SUCCESS") {
        localStorage.setItem("nda", JSON.stringify(this.nda));
        alert("SUCCESS");
        this.router.navigate(["/transactions"]);
      } else {
        alert(data.message);
      }
    });
  }

  clearSign() {
    this.agreementsign = "";
    this.signaturePad.clear();
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  home() {
    this.router.navigate(['/home']);
  }

}
