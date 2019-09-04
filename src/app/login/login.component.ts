import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { APIService } from '../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  loginForm: FormGroup;
  showSpinner: boolean = false;
  message = "";

  constructor(private router: Router, private fb: FormBuilder, private apiService: APIService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login(): void{
    this.showSpinner = true;
    this.apiService.login(this.loginForm.value).subscribe((data: any) => {
      this.showSpinner = false;
      if (data.status == "SUCCESS") {
        localStorage.setItem("enrollmentID", data.enrollmentID);
        localStorage.setItem("nda", JSON.stringify(data.nda));
        localStorage.setItem("buttons", JSON.stringify(data.buttons));
        this.router.navigate(["/home"]);
      } else {
        this.message = data.message;
      }
    }, error => {
      this.showSpinner = false;
      this.message = "Unable to login.";
    });
  }

}
