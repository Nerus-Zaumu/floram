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


  contactForm: FormGroup = new FormGroup({
    $key: new FormControl(null),
    clientName: new FormControl('Your Name', [Validators.required]),
    telephone: new FormControl("676254789", [Validators.required]),
    clientEmail: new FormControl(this.footerEmail, [Validators.required, Validators.email]),
    message: new FormControl('Message')
  });

  // client = new SMTPClient({
  //   user: 'Floram@Admin',
  //   password: 'floram',
  //   host: 'smtp.zaumunerusyimnai@gmail.com',
  //   ssl: true
  // })

  async sendMail(){
  //   try {
  //     const message = await this.client.sendAsync({
  //         text: `<p>${this.contactForm.value['telephone']}<br>
  //         ${this.contactForm.value['message']}</p>`,
  //         from: `${this.contactForm.value['clientEmail']}`,
  //         to: 'zaumunerusyimnai@gmail.com',
  //         cc: 'else neruszaumuy@gmail.com',
  //         subject: `<h1>From: ${this.contactForm.value['clientName']}</h1>`,
  //     });
  //     console.log(message);
  // } catch (err) {
  //     console.error(err);
  // }
  }


  constructor(private http: HttpClient) { }

//   addFruits(){
//     for(let obj of this.inserter){
//       const price = Math.floor(Math.random() * 50)
//       const stock = Math.floor(Math.random() * 300)
//       obj.price = price
//       obj.stock = stock
//          this.http.post('https://floram-20ac7-default-rtdb.firebaseio.com/fruits.json', obj)
//          .subscribe(result => console.log(`Fruit at index ${this.inserter.indexOf(obj)}: `, result))
//   }
// }
iconID: string[] = ['star-one', 'star-two', 'star-three', 'star-four', 'star-five']

fruitDataSource: Fruit[] = []

  getAllFruits() {
    const receivedFruits: Fruit[]= []
    this.http.get<Fruit | Object>('https://floram-20ac7-default-rtdb.firebaseio.com/fruits.json')
     .subscribe(fruitData => {
        for(const key in fruitData){
          receivedFruits.push(fruitData[key as keyof typeof fruitData])
        }
        this.fruitDataSource = receivedFruits
      })

  }

  incrementCartValue(){
    this.cardVal++
  }


  toggleRating(id: string, styleClass: string){
    this.iconID.filter(d => {
      let starEl = document.getElementById(d) as HTMLElement
      let starList = starEl.classList
      if(this.iconID.indexOf(d) <= this.iconID.indexOf(id)){
        starList.add(styleClass)
      }
      else{
        starList.remove(styleClass)
      }
    })
  }

}
