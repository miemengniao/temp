import { ThemeService } from './../theme.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

declare var $;

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.css']
})
export class WorkspaceComponent implements OnInit {
  isMobile: boolean;
  deviceHeight: any;
  deviceWidth: any;
  themeName: string;
  sidemenu = [
    {
      'text': '病人查询',
      'icon' : 'fa  fa-search fa-fw fa-lg',
      'mdbIcon' : 'search',
      'routerLink' : '/workspace/query',
      'selected': true
    },
      {
        'text': '查询统计',
        'icon' : 'fa fa-line-chart fa-fw',
        'mdbIcon' : 'show_chart',
        'routerLink' : '/workspace/statistic'
      }  ];

  constructor(private _router: Router, private themeService: ThemeService) {

  }
  routeToLink(data: any){
    if (!data.hasOwnProperty('childrens') && data.routerLink) {
      this._router.navigate([data.routerLink]);
    }
  }
  reAdjust() {
    this.deviceHeight = $(window).height();
    this.deviceWidth = $(window).width();
    if (this.deviceWidth < 995) {
      this.isMobile = true;
    }
  }
  onResize(event: any) {

    this.reAdjust();
    if (event.target.innerWidth < 995) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }
  }

  ngOnInit() {
    if (this.themeService.themeName) {
      this.themeName = this.themeService.getCurrentUsageThemeName();
    }else {
      this.themeName = 'Default';
    }
    this.reAdjust();
  }

}
