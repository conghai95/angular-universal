import { isPlatformServer } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID, ViewContainerRef } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-universal';
  constructor(
    private route: Router,
    private activatedRoute: ActivatedRoute,
    private viewContainer: ViewContainerRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {

  }

  ngOnInit(): void {
    console.log("platformId: ", isPlatformServer(this.platformId));
    if (!isPlatformServer(this.platformId)) {
      this.viewContainer.clear();
    }
    
    this.activatedRoute.url.subscribe((url: any) => console.log(url))
    this.route.events.subscribe(route => {
      if (route instanceof NavigationEnd) {
        console.log("route: ", route);
      }
    })
  }
}
