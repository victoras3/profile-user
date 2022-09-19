import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users:any;

  constructor( private service: UserService) {

  }

  ngOnInit(): void {
  }

  getData(){
    this.users = this.service.getData();
  }

  clearData(){
    this.users = null;
  }
}
