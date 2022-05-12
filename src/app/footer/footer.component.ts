import { UserService } from './../shared/user.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @ViewChild('footerVal') footerVal!: ElementRef;

  constructor(private userService: UserService,
     private router: Router) { }

  ngOnInit(): void {
  }

  tempSwitchToContact(){
    this.userService.footerEmail = this.footerVal.nativeElement.value;
    this.router.navigate(['/contact-us']);
  }

}
