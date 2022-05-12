import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  blogEntirety1: boolean = false;
  blogEntirety2: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
