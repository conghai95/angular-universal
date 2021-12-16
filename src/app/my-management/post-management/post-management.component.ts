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
    this.appService.getUsers().subscribe(res => {
      this.users = res;      
    })
  }

}
