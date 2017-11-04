
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AmexioWidgetModule, CommonHttpService } from 'amexio-ng-extensions';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { WorkspaceComponent } from './workspace/workspace.component';
import { QueryComponent } from './query/query.component';
import { StatisticComponent } from './statistic/statistic.component';
import { ThemeService } from './theme.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WorkspaceComponent,
    QueryComponent,
    StatisticComponent
  ],
  imports: [
    BrowserModule,
    AmexioWidgetModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: LoginComponent},
      {path: 'login', component: LoginComponent},
      {path: 'workspace',
            children: [
                {path : '', component: WorkspaceComponent},
                { path: 'query', component: QueryComponent},
                { path: 'statistic', component: StatisticComponent}
            ]}
      ])
  ],
  providers: [CommonHttpService, ThemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
