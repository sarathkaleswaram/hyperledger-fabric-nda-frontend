import { Component, OnInit } from '@angular/core';
import { APIService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private apiService: APIService, private router: Router) { }

  ngOnInit() {
  }

  signAgreement() {
    this.router.navigate(["/agreement"]);
  }

  listTransactions() {
    this.router.navigate(["/transactions"]);
  }

}
