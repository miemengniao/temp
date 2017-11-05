import { environment } from './../../environments/environment';

import { Http, RequestOptions , Headers} from '@angular/http';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

@Injectable()
export class QueryService {
  private url: string;
  private patientUrl: string;
  private queryTodayUrl: string;
  private matchTodayUrl: string;
  private matchMonthUrl: string;


  constructor(private router: Router,
              private loginService: LoginService,
              private http: Http
            ) {
                this.url = environment.urlBase + '/api/Query';
                this.patientUrl = environment.urlBase + '/api/Query/PatientDetails/';
                this.queryTodayUrl = environment.urlBase + '/api/Query/QueryTimesInToday/';
                this.matchTodayUrl = environment.urlBase + '/api/Query/QueryPositiveTimesInToday/';
                this.matchMonthUrl = environment.urlBase + '/api/Query/QueryPositiveTimesInMonth/';

               }
  query(name: string, contact: string, idNum: string, birthday: string) {

    // console.log(`${this.loginService.IsLogin}:${this.loginService.Token}`);

    // const headers = new Headers({ 'Content-Type': 'application/json' ,
    //                               'SinyooAuthroize': this.loginService.Token});
    const headers = new Headers();
    headers.append('SinyooAuthroize', this.loginService.Token);
    headers.append( 'Content-Type', 'application/json' );

    const opts = new RequestOptions();
    opts.headers = headers;
      return this.http.post(this.url,
          {name: name, contact: contact, idNum: idNum, birthday: birthday}
        , opts);
  }

  queryPatientDetail( id: number) {
    console.log(`${id}`);

    const headers = new Headers();
    headers.append('SinyooAuthroize', this.loginService.Token);
    headers.append( 'Content-Type', 'application/json' );
    const opts = new RequestOptions();
    opts.headers = headers;

      return this.http.get(this.patientUrl + `${id}`, opts)
      .catch(error => {
        if ( error.status === 401 ) {
           this.router.navigate(['/login']);
        }else {
          return Observable.throw(error);
        }
      });

  }

  QueryInToday() {

    const headers = new Headers();
    headers.append('SinyooAuthroize', this.loginService.Token);
    headers.append( 'Content-Type', 'application/json' );
    const opts = new RequestOptions();
    opts.headers = headers;

          return this.http.get(this.queryTodayUrl, opts)
          .catch(error => {
            if ( error.status === 401 ) {
               this.router.navigate(['/login']);
            }else {
              return Observable.throw(error);
            }
          });
  }

  MatchInToday() {
    const headers = new Headers();
    headers.append('SinyooAuthroize', this.loginService.Token);
    headers.append( 'Content-Type', 'application/json' );
    const opts = new RequestOptions();
    opts.headers = headers;

          return this.http.get(this.matchTodayUrl, opts)
          .catch(error => {
            if ( error.status === 401 ) {
               this.router.navigate(['/login']);
            }else {
              return Observable.throw(error);
            }
          });
  }

  MatchInMonth() {
    const headers = new Headers();
    headers.append('SinyooAuthroize', this.loginService.Token);
    headers.append( 'Content-Type', 'application/json' );
    const opts = new RequestOptions();
    opts.headers = headers;

      return this.http.get(this.matchMonthUrl, opts)
      .catch(error => {
        if ( error.status === 401 ) {
           this.router.navigate(['/login']);
        }else {
          return Observable.throw(error);
        }
      });
  }
}
