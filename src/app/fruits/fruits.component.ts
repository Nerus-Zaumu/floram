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
  displayController: number = 6
  workingFruits: Fruit[] = []

  ngOnInit(): void {
    this.userService.getAllFruits();
    this.workingFruits = this.userService.fruitDataSource.slice(0, this.displayController)
    this.fruitInfo = this.workingFruits
  }

  starColourChanger(){
    this.colourState = !this.colourState;
  }

  incrementController(){
    if(this.displayController < this.userService.fruitDataSource.length){
      this.displayController += 6
      this.userService.getAllFruits();
      this.workingFruits = this.userService.fruitDataSource.slice(0, this.displayController)
      this.fruitInfo = this.workingFruits
    }
  }

  decrementController(){
    if(this.displayController < this.userService.fruitDataSource.length && this.displayController >= 6){
      this.displayController -= 6
      this.userService.getAllFruits();
      this.workingFruits = this.userService.fruitDataSource.slice(0, this.displayController)
      this.fruitInfo = this.workingFruits
    }
  }

}
