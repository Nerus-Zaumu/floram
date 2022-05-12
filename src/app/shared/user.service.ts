import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  contactForm: FormGroup = new FormGroup({
    $key: new FormControl(null),
    clientName: new FormControl('Your Name', [Validators.required]),
    telephone: new FormControl("676254789", [Validators.required]),
    clientEmail: new FormControl('johndoe@gmail.com', [Validators.required, Validators.email]),
    message: new FormControl('Message')
  });

  constructor() { }
}
