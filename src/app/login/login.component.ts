import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
name: string;
pswd: string;
loginForm: FormGroup;
isSubmitted = false;

  constructor(private router: Router, private fb:FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      name: ['', Validators.required],
      pswd: ['', Validators.required]
    })
  }

  login(): void{
    console.log(this.loginForm.value);
    if(this.loginForm.valid ){
      this.router.navigate(["/agreement"]);
    }else{
      console.log('Invalid credentials');
    }
    // this.authService.login(this.loginForm.value);
    // this.router.navigateByUrl('/admin');
  }

}
