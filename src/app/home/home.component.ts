import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import User from '../user';

export interface Users {
  date: number;
  month: string;
  company_desc: string;
  location: string;
  location_receive: string;
  company_receive: string;
  transaction: string;
  state_accord: string;
  state_executed: string;
}

const ELEMENT_DATA: Users[] = [];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  users: User[];
  constructor(private us: UserService, private router: Router) { }

  ngOnInit() {

    this.us.getUser().subscribe((data: User[]) => {
      this.users = data;
  });
  }

  displayedColumns: string[] = ['date', 'company_desc', 'location', 'state_executed'];
  dataSource = ELEMENT_DATA;

}
