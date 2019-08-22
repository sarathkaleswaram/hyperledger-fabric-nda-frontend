import { Component, OnInit } from '@angular/core';
import { APIService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  buttons: [] = [];

  constructor(private apiService: APIService, private router: Router) { }

  ngOnInit() {
    this.buttons = JSON.parse(localStorage.getItem("buttons"));
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  home() {
    this.router.navigate(['/home']);
  }
}
