import { UserService } from './../shared/user.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

@ViewChild('dropdown') dropdown!: ElementRef;

  constructor(public userService: UserService) { }

  ngOnInit(): void {
  }

  closeDropdown(){
    this.dropdown.nativeElement.style.display = 'block';
    console.log(this.dropdown);


  }

}
