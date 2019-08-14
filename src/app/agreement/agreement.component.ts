import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { APIService } from '../services/api.service';
import { SignatureFieldComponent } from '../signature-field/signature-field.component';


@Component({
  selector: 'app-agreement',
  templateUrl: './agreement.component.html',
  styleUrls: ['./agreement.component.scss']
})
export class AgreementComponent implements OnInit {

  agreementForm: FormGroup;
  @ViewChildren(SignatureFieldComponent) public sigs: QueryList<SignatureFieldComponent>;

  constructor(private fb: FormBuilder, private router: Router, private apiService:APIService) {
  }

  ngOnInit() {
    this.agreementForm = this.fb.group({
      disclosingParty:['', Validators.required],
      disclosingPartyLocation:['', Validators.required],
      receivingParty:['', Validators.required],
      receivingPartyLocation:['', Validators.required],
      date: ['', Validators.required],
      ndaKey:['', Validators.required],
      agreementSign: [''],
      enrollmentID: [''],
      invokeFunc: ['submitNDA']
    });
  }

  signature():void {
    console.log(this.agreementForm.value)
    this.agreementForm.controls['ndaKey'].setValue(this.agreementForm.controls['ndaKey'].value.toUpperCase());
    this.agreementForm.controls['enrollmentID'].setValue(localStorage.getItem("enrollmentID"));
    this.apiService.submitNDA(this.agreementForm.value).subscribe((data: any) => {
      if (data.status == "SUCCESS") {
        alert("SUCCESS");
      } else {
        alert(data.message);
      }
    });
  }

  clearSign() {
    this.agreementForm.controls['agreementSign'].setValue("");
  }

}
