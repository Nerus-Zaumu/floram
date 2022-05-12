import { UserService } from './../shared/user.service';
import { Component, OnInit } from '@angular/core';
import { Fruit } from '../shared/fruit';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.scss']
})
export class FruitsComponent implements OnInit {

  colourState: boolean = false;

  constructor(public userService: UserService) { }

  fruitInfo: Fruit[] = [];

  ngOnInit(): void {
    this.userService.createFruits();
    this.fruitInfo = this.userService.dataSource
  }

  starColourChanger(){
    this.colourState = !this.colourState;
  }

}
