import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { CommonService } from '../../core/services/common.service';
import { Router } from '@angular/router';

export interface Profile {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @ViewChild('plSidenav') public sidenav: ElementRef;
  sideMenuState = 'close';
  categories: any;
  config: any;

  constructor(
    private common: CommonService,
    private router: Router
  ) { }
  loginLabel;
  ngOnInit() {
    this.loginLabel = "ログインする";
    this.fetchCategories();
  }

  loginError() {
    alert('This feature is not available yet!');
  }

  fetchCategories() {
    this.common.getCategories().subscribe(value => {
      this.categories = value['data'];
    });
  }

  togglePreLogSidemenu() {
    if (this.sideMenuState === 'close') {
      this.sidenav.nativeElement.style.width = '240px';
      this.sideMenuState = 'open';
    } else if (this.sideMenuState === 'open') {
      this.sidenav.nativeElement.style.width = '0px';
      this.sideMenuState = 'close';
    }
  }

  toggleClose() {
    this.sidenav.nativeElement.style.width = '0px';
    this.sideMenuState = 'close';
  }

  catSelect(data) {
    this.common.setCatID(data.id);
    this.common.setCatName(data.name)
    this.toggleClose();
    this.router.navigate(['/']);
  }

  iconClick(data) {
    switch (data) {
      case 'insta':
        window.open("https://www.instagram.com/mercari/?hl=en", "_blank");
        break;

      case 'fb':
        window.open("https://www.facebook.com/MercariApp/", "_blank");
        break;

      case 'cart':
        window.alert('The shipping cart feature is coming soon');
        break;

      case 'notif':
        alert('Notification alert is coming soon');
        break;
    }
  }

}
