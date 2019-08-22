import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-agreement',
  templateUrl: './agreement-print.component.html',
  styleUrls: ['./agreement-print.component.scss']
})
export class AgreementPrintComponent implements OnInit {
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
  nda: any = {};

  constructor(private router: Router) {
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

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  home() {
    this.router.navigate(['/home']);
  }
}
