import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UserService } from '../services/user.service';

declare let $: any;
@Component({
  selector: 'app-agreement',
  templateUrl: './agreement.component.html',
  styleUrls: ['./agreement.component.scss']
})
export class AgreementComponent implements OnInit {

  agreementForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private us:UserService) { 
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.agreementForm = this.fb.group({
      date: ['', Validators.required],
      month: ['', Validators.required],
      company_desc:['', Validators.required],
      location:['', Validators.required],
      location_receive:['', Validators.required],
      company_receive:['', Validators.required],
      transaction:['', Validators.required],
      state_accord:['', Validators.required],
      state_executed:['', Validators.required],
    })
  }

  addUser(date, month, company_desc, location, location_receive, company_receive, transaction, state_accord, state_executed){

    this.us.addUser(date, month, company_desc, location, location_receive, company_receive, transaction, state_accord, state_executed);

  }

  signature():void {
    this.router.navigate(["home"]);
  }
  // saveModal(e): void {
  //   console.log(e);
  // }
  // hideModal():void {
  //   document.getElementById('close-modal').click();
  // }

}
