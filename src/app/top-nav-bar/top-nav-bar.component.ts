import { ThemeService } from './../theme.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-top-nav-bar',
  templateUrl: './top-nav-bar.component.html',
  styleUrls: ['./top-nav-bar.component.css']
})
export class TopNavBarComponent implements OnInit {
  httpResponse: any;
  menuData: any[] = [];
  menus = [
    {
      'label' : '退出',
      'icon': 'fa fa-user-circle fa-fw fa-lg',
      'menuId': '1'
    }
  ];
  

    constructor(public _http: Http, private _router: Router , private themeService: ThemeService){
      this.menuData = this.menus;
    }

    ngOnInit(): void {

    }

    onClick(menuItem: any){
      if (menuItem.menuId && menuItem.menuId === 1){
        this._router.navigate(['/login']);
      }

    }
}
