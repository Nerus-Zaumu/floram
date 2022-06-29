import { UserService } from './shared/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'floram';

  constructor(private userService: UserService){}

  ngOnInit(): void {
    this.userService.getAllFruits()
  }
}
