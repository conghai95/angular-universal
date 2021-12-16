import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-universal';
  constructor(
    private meta: Meta,
    private route: Router
  ) {

  }

  ngOnInit(): void {
      this.meta.addTag({name: "hello", content: 'world!'})
  }
}
