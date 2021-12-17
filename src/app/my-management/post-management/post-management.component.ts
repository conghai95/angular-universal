import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SeoService } from 'src/app/services/seo.service';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-post-management',
  templateUrl: './post-management.component.html',
  styleUrls: ['./post-management.component.scss']
})
export class PostManagementComponent implements OnInit {

  users: any;

  constructor(
    private http: HttpClient,
    private seo: SeoService,
    private appService: AppService
    ) { }

  ngOnInit(): void {
    this.http.get('http://14.160.24.128:8069/resident-api/rest/intection/get?id=b061345a-14f4-4770-bbdd-43b0815d68d6')
    .subscribe((res: any) => {
      this.seo.setData({
        title: res.title,
        description: res.content,
        url: `http://14.160.24.128:8069/resident-api/image-proxy${res.files[0].location}`
      })
    });
    // localStorage.setItem("test", 'hello world!')
    // console.log("localStorage: ", localStorage.getItem("test"));
    this.appService.getUsers().subscribe(res => {
      this.users = res;      
    })
  }

}
