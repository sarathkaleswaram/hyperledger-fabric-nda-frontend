import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { APIService } from '../services/api.service';

@Component({
  selector: 'app-submit',
  templateUrl: './add-nda.component.html',
  styleUrls: ['./add-nda.component.scss']
})
export class AddNDAComponent implements OnInit {
  
  ndaForm: FormGroup;
  showSpinner: boolean = false;
  message = "";

  constructor(private router: Router, private fb: FormBuilder, private apiService: APIService) { }

  ngOnInit() {
    this.ndaForm = this.fb.group({
      name: ['', Validators.required],
      ceo: ['', Validators.required],
      location: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      date: ['', Validators.required],
      regarding: ['', Validators.required],
      enrollmentID: ['', Validators.required],
      invokeFunc: ['initNDA']
    });
    this.ndaForm.controls['enrollmentID'].setValue(localStorage.getItem("enrollmentID"));
  }

  getToday(): string {
    return new Date().toISOString().split('T')[0]
 }

  submit(): void{
    this.showSpinner = true;
    this.apiService.initNDA(this.ndaForm.value).subscribe((data: any) => {
      this.showSpinner = false;
      if (data.status == "SUCCESS") {
        alert("SUCCESS");
        this.router.navigate(["/home"]);
      } else {
        this.message = data.message;
      }
    }, error => {
      this.showSpinner = false;
      this.message = "Unable to submit.";
    });
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
  
  home() {
    this.router.navigate(['/home']);
  }

}
