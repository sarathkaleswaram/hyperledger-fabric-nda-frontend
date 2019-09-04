import { Component, OnInit } from '@angular/core';
import { APIService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {

  txs = [];
  showSpinner: boolean = false;

  constructor(private apiService: APIService, private router: Router) { }

  ngOnInit() {
    this.txs = [];
    this.showSpinner = true;
    let body = { enrollmentID: localStorage.getItem("enrollmentID") };
    this.apiService.getNDATxs(body).subscribe((data: any) => {
      this.showSpinner = false;
      if (data.status == "SUCCESS") {
        this.txs = data.message;
      } else {
        alert(data.message);
      }
    }, error => {
      this.showSpinner = false;
      alert(error.message);
    });
  }

  viewNDA(nda) {
    localStorage.setItem("nda", JSON.stringify(nda));
    this.router.navigate(['/agreement-print']);
  }
  
  home() {
    this.router.navigate(['/home']);
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
