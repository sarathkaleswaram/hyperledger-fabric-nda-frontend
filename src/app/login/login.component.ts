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
  message = "";

  constructor(private router: Router, private fb: FormBuilder, private apiService: APIService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login(): void{    
    this.apiService.login(this.loginForm.value).subscribe((data: any) => {
      if (data.status == "SUCCESS") {
        localStorage.setItem("enrollmentID", data.enrollmentID);
        this.router.navigate(["/home"]);
      } else {
        this.message = data.message;
      }
    }, error => {
      this.message = "Unable to login.";
    });
  }

}
