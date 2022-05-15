import { Fruit } from './fruit';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  cardVal: number = 0;
  footerEmail: string = 'Email';

  fruitImages: string[] = [
    'assets/images/p1.png',
    'assets/images/p2.png',
    'assets/images/p3.png',
    'assets/images/p4.png',
    'assets/images/p5.png',
    'assets/images/p6.png'
]

fruitPrice: number = 10;

fruitNames: string[] = [
  'Orange',
  'Durian',
  'Kiwi',
  'Mango',
  'Banana',
  'Apple'
]

  dataSource: Fruit[] = [];
  newFruit!: Fruit;

  fruitsToBeInserted: {name: string, image: string, price: number, stock: number}[] = [];


  contactForm: FormGroup = new FormGroup({
    $key: new FormControl(null),
    clientName: new FormControl('Your Name', [Validators.required]),
    telephone: new FormControl("676254789", [Validators.required]),
    clientEmail: new FormControl(this.footerEmail, [Validators.required, Validators.email]),
    message: new FormControl('Message')
  });

  constructor(private http: HttpClient) { }

  createFruits(){
   for(let fruit of this.fruitImages){
     this.newFruit = {
       image: fruit,
       name: this.fruitNames[this.fruitImages.indexOf(fruit)],
       price: this.fruitPrice
     }
     this.dataSource.push(this.newFruit);
   }
  }

  incrementCartValue(){
    this.cardVal++
  }

}
