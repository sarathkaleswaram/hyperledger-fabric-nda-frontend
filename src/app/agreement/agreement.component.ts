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
  agreementForm = {
    disclosingParty: '',
    disclosingPartyLocation: '',
    receivingParty: '',
    receivingPartyLocation: '',
    date: '',
    ndaRegarding: '',
    agreementSign: '',
    enrollmentID: '',
    ndaKey: '',
    invokeFunc: "submitNDA"
  }
  showSpinner: boolean = false;
  nda: any = {};

  constructor(private fb: FormBuilder, private router: Router, private apiService:APIService) {
  }

  ngOnInit() {
    this.nda = JSON.parse(localStorage.getItem("nda"));
    if (this.nda == null) {
      alert("NDA not initialized to your accout.");
      this.router.navigate(["/home"]);
    } else {
      this.agreementForm.disclosingParty = this.nda.disclosingparty;
      this.agreementForm.disclosingPartyLocation = this.nda.disclosingpartylocation;
      this.agreementForm.receivingParty = this.nda.receivingparty;
      this.agreementForm.receivingPartyLocation = this.nda.receivingpartylocation;
      this.agreementForm.date = this.nda.date;
      this.agreementForm.ndaRegarding = this.nda.regarding;
      this.agreementForm.agreementSign = this.nda.agreementsign;
      this.agreementForm.ndaKey = this.nda.disclosingparty.toUpperCase();
      this.agreementForm.enrollmentID = localStorage.getItem("enrollmentID");
    }
  }

  ngAfterViewInit() {
    this.signaturePad.set('minWidth', 1);
    this.signaturePad.clear();
  }
 
  drawComplete() {
    this.agreementForm.agreementSign = this.signaturePad.toDataURL();
  }

  submit():void {
    this.showSpinner = true;
    this.apiService.submitNDA(this.agreementForm).subscribe((data: any) => {
      this.showSpinner = false;
      if (data.status == "SUCCESS") {
        this.nda.agreementsign = this.agreementForm.agreementSign;
        localStorage.setItem("nda", JSON.stringify(this.nda));
        alert("SUCCESS");
        this.router.navigate(["/transactions"]);
      } else {
        alert(data.message);
      }
    });
  }

  clearSign() {
    this.agreementForm.agreementSign = "";
    this.signaturePad.clear();
  }

}
