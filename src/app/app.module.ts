import { QueryService } from './services/query.service';
import { LoginService } from './services/login.service';
import { CookieService } from 'ngx-cookie-service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AmexioWidgetModule, CommonHttpService } from 'amexio-ng-extensions';
import { AmexioDashboardModule } from 'amexio-ng-extensions/dashboard';
import {AmexioChartModule} from "amexio-ng-extensions/charts";

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { WorkspaceComponent } from './workspace/workspace.component';
import { QueryComponent } from './query/query.component';
import { StatisticComponent } from './statistic/statistic.component';
import { ThemeService } from './theme.service';
import { TopNavBarComponent } from './top-nav-bar/top-nav-bar.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WorkspaceComponent,
    QueryComponent,
    StatisticComponent,
    TopNavBarComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AmexioWidgetModule,
    AmexioDashboardModule,
    AmexioChartModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: LoginComponent},
      {path: 'login', component: LoginComponent},
      {path: 'workspace', component: WorkspaceComponent,
            children: [
                { path: '', redirectTo: 'query', pathMatch: 'full'},
                { path: 'query', component: QueryComponent},
                { path: 'statistic', component: StatisticComponent}
            ]}
      ])
  ],
  providers: [
      CommonHttpService,
      ThemeService,
      CookieService,
      LoginService,
      QueryService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
