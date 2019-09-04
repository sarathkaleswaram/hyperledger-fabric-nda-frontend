import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-agreement',
  templateUrl: './agreement-print.component.html',
  styleUrls: ['./agreement-print.component.scss']
})
export class AgreementPrintComponent implements OnInit {
  nda: any = {};

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.nda = JSON.parse(localStorage.getItem("nda"));
    if (this.nda == null) {
      alert("NDA not initialized to your accout.");
      this.router.navigate(["/home"]);
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
