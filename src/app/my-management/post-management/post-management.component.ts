import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-post-management',
  templateUrl: './post-management.component.html',
  styleUrls: ['./post-management.component.scss']
})
export class PostManagementComponent implements OnInit {

  users: any;

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    // localStorage.setItem("test", 'hello world!')
    // console.log("localStorage: ", localStorage.getItem("test"));
    this.appService.getUsers().subscribe(res => {
      this.users = res;      
    })
  }

}
