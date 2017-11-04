import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';

@Injectable()
export class LoginService {
  private isLogin = false;
  private token: string;
  private userName: string;
  private loginUrl: string;

  constructor(private http: Http) {
    this.loginUrl = environment.urlBase + '/api/user/login';
  }

  get IsLogin() {
    return sessionStorage.getItem('userCrabyterToken') !== null;
  }

  get Token() {
    return sessionStorage.getItem('userCrabyterToken');
  }


  login(name: string, password: string): Promise<boolean> {

    return new Promise((resolve, reject) => {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        this.http
            .post(this.loginUrl, {'Name': name, 'Password': password} )
            .subscribe(
              token => {
                this.token = token.text(),
                sessionStorage.setItem('userCrabyterToken', this.token);
                 this.isLogin = true;
                  resolve(true);
              },
              err => {
                sessionStorage.removeItem('userCrabyterToken');
                // console.log(err) ;
                reject(err);
              },
              // ()=>console.log("complete")
            );
            });
  }



}
