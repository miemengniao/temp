import { ThemeService } from './theme.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $;
const CSS_LOCATION = 'assets/themes/';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  isMobile: boolean;
  deviceHeight: any;
  deviceWidth: any;


  constructor(private _router: Router, private themeService: ThemeService) {
  }

  ngOnInit(): void {
    // set themename which user selected
    this.themeService.setThemeName(this.themeService.getCurrentUsageThemeName());

        // Theme apply
        if (this.themeService.getCurrentUsageThemeName()) {
          this.applyTheme(this.themeService.getCurrentUsageThemeName());
        }
        this.reAdjust();
  }


  applyTheme(name: any) {
      const currentTheme = document.head.querySelectorAll(`link[rel="stylesheet"]`);
      this.removeExistingTheme(currentTheme);
      if (name !== null) {
        this.createAndApplyNewTheme(name);
      }
  }

  reAdjust() {
    this.deviceHeight = $(window).height();
    this.deviceWidth = $(window).width();
    if (this.deviceWidth < 768) {
      this.isMobile = true;
    }
  }

  removeExistingTheme(keyList: any) {
    if (keyList !== null && keyList && keyList.length !== 0){
      keyList.forEach(
        (key) => {
          if (key.id === 'custom_theme') {
            document.head.removeChild(key);
          }
        }
      );
    }
  }

  createAndApplyNewTheme(theme: any) {

    if (theme === 'MDB') {
      // this is for MDB theme
      const linkEl = document.createElement('link');
      linkEl.setAttribute('rel', 'stylesheet');
      linkEl.id = 'custom_theme';
      if (this.themeService.getThemeCSSFileName()) {
        linkEl.href = CSS_LOCATION + this.themeService.getThemeCSSFileName() + '.css';
      }

      document.head.appendChild(linkEl);

      // add material +family=Roboto api
      const font1 = document.createElement('link');
      font1.setAttribute('rel', 'stylesheet');
      font1.id = 'custom_theme';
      font1.href = 'https://fonts.googleapis.com/css?family=Roboto:400,500,700;';
      document.head.appendChild(font1);


      const font2 = document.createElement('link');
      font2.setAttribute('rel', 'stylesheet');
      font2.id = 'custom_theme';
      font2.href = 'https://fonts.googleapis.com/icon?family=Material+Icons';
      document.head.appendChild(font2);
    }else {
      // Font of Bootstrap
      const font1 = document.createElement('link');
      font1.setAttribute('rel', 'stylesheet');
      font1.id = 'custom_theme';
      font1.href = 'https://fonts.googleapis.com/css?family=Shadows+Into+Light';
      document.head.appendChild(font1);

      // this is for default theme
      const linkEl = document.createElement('link');
      linkEl.setAttribute('rel', 'stylesheet');
      linkEl.id = 'custom_theme';
      if (this.themeService.getThemeCSSFileName()) {
        linkEl.href = CSS_LOCATION + this.themeService.getThemeCSSFileName() + '.css';
      }
      document.head.appendChild(linkEl);
    }

  }
}
