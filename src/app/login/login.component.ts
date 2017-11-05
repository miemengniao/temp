import { LoginService } from './../services/login.service';
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
  nameModel: string;
  psModel: string;
  loginerrortext: string;

  sportName: string;
  sportNameObj: any;
  themeNameArray = [{
    'displayname': '现代简洁', 'name': 'MDB', 'fileName': 'MAT-bluegrey'  }, {
    'displayname': '琥珀乐爱', 'name': 'MDB', 'fileName': 'MAT-amber'  }, {
    'displayname': '爱巧克力', 'name': 'MDB', 'fileName': 'MAT-brown'  }, {
    'displayname': '靛蓝深沉', 'name': 'MDB', 'fileName': 'MAT-indigo'  }, {
    'displayname': '明兰欢快', 'name': 'MDB', 'fileName': 'MAT-light-blue'  }, {
    'displayname': '加州橙彩', 'name': 'Default', 'fileName': 'BTS-Orange'  }, {
    'displayname': '宁静青色', 'name': 'Default', 'fileName': 'BTS-Cyan'  }, {
    'displayname': '轻巧随意', 'name': 'Default', 'fileName': 'BTS-Limegreen'  }, {
    'displayname': '七巧拼图', 'name': 'Default', 'fileName': 'BTS-Polygon'  }, {
    'displayname': '红红火火', 'name': 'Default', 'fileName': 'BTS-Red'  }];

  constructor(private route: Router,
             private theme: ThemeService,
             private myService: LoginService) {

  }

  ngOnInit() { }

  async login() {
    
    if (!this.nameModel || !this.psModel) {
      this.loginerrortext = '请填写账号密码';
    } else {

      try {
          const login = await this.myService.login(this.nameModel, this.psModel);
          this.route.navigateByUrl('workspace');
      }catch ( x ) {
        this.loginerrortext = '用户名密码错误，请重新填写';
      }
    }
  }

  inputFocus() {
    this.loginerrortext = '';
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
