import { ThemeService } from './../theme.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

const CSS_LOCATIONs = 'assets/themes/';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  sportName: string;
  sportNameObj: any;
  themeNameArray = [{
    'name': 'MDB', 'fileName': 'MAT-bluegrey'
  }, {
    'name': 'MDB', 'fileName': 'MAT-amber'
  }, {
    'name': 'MDB', 'fileName': 'MAT-brown'
  }, {
    'name': 'MDB', 'fileName': 'MAT-indigo'
  }, {
    'name': 'MDB', 'fileName': 'MAT-light-blue'
  }, {
    'name': 'Default', 'fileName': 'styles'
  }, {
    'name': 'Default', 'fileName': 'BTS-Orange'
  }, {
    'name': 'Default', 'fileName': 'BTS-Cyan'
  }, {
    'name': 'Default', 'fileName': 'BTS-Limegreen'
  }, {
    'name': 'Default', 'fileName': 'BTS-Polygon'
  }, {
    'name': 'Default', 'fileName': 'BTS-Red'
  }];

  constructor(private route: Router, private theme: ThemeService) {

  }

  ngOnInit() { }

  login() {
    this.route.navigateByUrl('workspace');
  }

  

  setTheme(themeName) {
    console.log(themeName);

    if (themeName) {
      this.themeNameArray.forEach((themeObject) => {
        if (themeObject.fileName === themeName.fileName) {
          this.setThemeinternal(themeObject);
          this.theme.setThemeCSSFileName(themeObject.fileName);
        }
      });
    }
  }

  setThemeinternal(themeName: any) {
      this.theme.setThemeName(themeName.name);
      let currentTheme = document.head.querySelectorAll(`link[rel="stylesheet"]`);
      this.removeExistingTheme(currentTheme);
      if (themeName.fileName != null) {
        this.createAndApplyNewTheme(themeName);
        
      }

    }

    
  //removed old theme css
  removeExistingTheme(keyList: any) {
    if (keyList != null && keyList && keyList.length != 0) {
      keyList.forEach((key) => {
        if (key.id == 'custom_theme') document.head.removeChild(key);
      });

    }

  }

  //apply theme based on use selection
  createAndApplyNewTheme(theme: any) {
    if (theme.name === "MDB") {
      //this is for MDB theme
      let linkEl = document.createElement('link');
      linkEl.setAttribute('rel', 'stylesheet');
      linkEl.id = 'custom_theme';
      linkEl.href = CSS_LOCATIONs + '/' + theme.fileName + '.css';
      document.head.appendChild(linkEl);

      //add material +family=Roboto api
      const font1 = document.createElement('link');
      font1.setAttribute('rel', 'stylesheet');
      font1.id = 'custom_theme';
      font1.href = "https://fonts.googleapis.com/css?family=Roboto:400,500,700;";
      document.head.appendChild(font1);

      let font2 = document.createElement('link');
      font2.setAttribute('rel', 'stylesheet');
      font2.id = 'custom_theme';
      font2.href = "https://fonts.googleapis.com/icon?family=Material+Icons";
      document.head.appendChild(font2);
    } else {

      // this is for default theme
      const linkEl = document.createElement('link');
      linkEl.setAttribute('rel', 'stylesheet');
      linkEl.id = 'custom_theme';
      linkEl.href = CSS_LOCATIONs + '/' + theme.fileName + '.css';
      document.head.appendChild(linkEl);

      // Font of Bootstrap
      const font1 = document.createElement('link');
      font1.setAttribute('rel', 'stylesheet');
      font1.id = 'custom_theme';
      font1.href = 'https://fonts.googleapis.com/css?family=Shadows+Into+Light';
      document.head.appendChild(font1);

    }

  }
}
