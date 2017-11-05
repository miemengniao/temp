import { LoginService } from './../services/login.service';
import { Router } from '@angular/router';
import { QueryService } from '../services/query.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import * as _ from 'lodash';

declare var jQuery: any;

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryComponent implements OnInit {
  _name: string;
  _birthDay: string ;
  _contact: string;
  _idNum: string;
  queryErrorText: string;
  matchTotal: number;
  matchName: number;
  matchBirth: number;
  matchContact: number;
  matchId: number;

  currentPatientId ;

  queryResult = {data: [ ]};

  queryDetails = {data: [ ]};

  currentDate: Date = new Date();
  abcd = 'amexio-grid-headers';
  @ViewChild('myModal') myModal: ElementRef;
  @ViewChild('hosiptalResult') myhosi: ElementRef;

  flag = false;

  constructor(
      private router: Router,
      private loginServie: LoginService,
      private queryService: QueryService) {
  }

  ngOnInit() { }
  // 因为amexio 输入控件不支持一些focus事件,所以只好利用property来模拟实现.
  get name (){ return this._name; }
  get birthDay() {return this._birthDay; }
  get innerBirthday(): string {return jQuery('[aria-label="Date picker"]').val(); }
  get contact () {return this._contact; }
  get idNum () { return this._idNum; }
  set name (value) {
    if (this._name !== value) {
       this._name = value;
       this.queryErrorText = '';
    }
  }
  set birthDay (value) {
    console.log(value);
    if (this._birthDay !== value) {
       this._birthDay = value;
       this.queryErrorText = '';
    }
  }
  set contact (value) {
    if (this._contact !== value) {
      this._contact = value;
      this.queryErrorText = '';
    }
  }
  set idNum (value) {
    if (this._idNum !== value) {
      this._idNum = value;
      this.queryErrorText = '';
    }
  }
  queryCondtion: string;

  setQueryCondtion (birth: string) {
    let ret = '';
    if ( this.name) { ret += `--姓名为{${this.name}}`; }
    if ( birth ) { ret += `--出生日期为{${birth}}`; }
    if ( this.contact) { ret += `--联系方式为{${this.contact}}`; }
    if ( this.idNum) { ret += `--证件号码为{${this.idNum}}`; }

    this.queryCondtion = ret;
  }
  Query() {
    this.queryErrorText = '';
    const birth = this.innerBirthday.trim();

    if ( (this.name === undefined || this.name === '')
     && (birth === undefined || birth === '')
      && (this.contact === undefined || this.contact === '')
       && (this.idNum === undefined  || this.idNum === '')
    ) {
      this.queryErrorText = '请输入查询条件！';
      return;
    }else if ( ( (this.contact === undefined || this.contact === '')
            && (this.idNum === undefined || this.idNum === '') )
        && (this.name === undefined || birth === undefined || this.name === '' || birth === '' )) {
          this.queryErrorText = '名字和生日需要同时提供！';
          return;
    }

    if (birth !== undefined && birth !== '' ) {
      console.log(birth);
      console.log(birth.length);

      if (birth.length < 5) {
        const reg = new RegExp('^[0-9]{4}$');
            if (!reg.test(birth)) {
              this.queryErrorText = '必须输入完整4位年份';
              return;
            }
      }else {
        const reg = new RegExp('^[0-9]{4}-[0-9]{2}-[0-9]{2}$');
        console.log(birth);
        if (!reg.test(birth)) {
          this.queryErrorText = '必须输入YYYY-MM-DD格式';
          return;
        }
      }
    }
    if (this.idNum !== undefined && this.idNum !== '') {
      const reg = new RegExp('^[0-9]{15,18}$');

      if (!reg.test(this.idNum)) {
        this.queryErrorText = '证件号码应为至少为15数字';
        return;
      }
    }
    if (this.contact !== undefined && this.contact !== '') {
      const reg = new RegExp('^[0-9\-]{7,}$');

      if (!reg.test(this.contact)) {
        this.queryErrorText = '联系方式至少8位数字';
        return;
      }
    }
    {
      this.setQueryCondtion(birth);
      this.queryResult =  {data: []};
  

      this.queryService
          .query(this.name, this.contact, this.idNum, birth)
          .catch(error => {
            if ( error.status === 401 ) {
              this.router.navigate(['/login']);
            }if (error.status === 400 ) {
              this.queryErrorText = JSON.stringify(error.json());

            }
            return Observable.throw(error);
          })
          .subscribe(
            data => {
                let ret: Array<any> = data.json();
                ret = _(ret).map(x => {
                    let total = 0;
                    if ( _.includes(x.name, '*')) {total ++ ; }
                    if ( _.includes(x.birthday, '*'))  { total ++; }
                    if ( _.includes(x.contact, '*')) { total ++; }
                    if ( _.includes(x.idNum, '*')) { total ++; }
                    if ( x.sex == '其它') { x.sex = '不详'; }
                    x.total = total;
                    return x;
                }).filter( x => {
                    let isOkay = false;
                    isOkay = x.total < 4 ;
                    if ( (!_.includes(x.name, '*')) && this.innerBirthday && this.name) {
                        // 如果名字匹配上了,而且存在生日和名字的条件,那么我们检查一下年是否匹配
                        console.log(x.birthday.substring(0,  4));
                        console.log(this.innerBirthday.substring(0, 4));
                        if (this.innerBirthday.substring(0, 4) !== x.birthday.substring(0,  4)) {

                            isOkay = false;
                        }
                    }
                    return isOkay;
                })
                .sortBy(x => x.total )
                .value();

                this.queryResult =  {data: ret};

                this.matchTotal = ret.length;
                this.matchName =  _(ret).filter( x => x.name == this._name).size();
                this.matchBirth = _(ret).filter( x => x.birthday == this.innerBirthday).size();
                this.matchContact = _(ret).filter( x => x.contact == this._contact).size();
                this.matchId = _(ret).filter( x => x.idNum == this._idNum).size();
            },
            err => {
              // console.log(err);
            },
            // () => console.log('done')

          );
      }
  }

  Reset() {
    this.name = undefined;
    this.contact = undefined;
    this.idNum = undefined;
    this._birthDay = undefined;
    jQuery('[aria-label="Date picker"]').val('');
    this.queryErrorText = undefined;
  }

  QueryDetail(ret) {
    this.currentPatientId = ret.patientId;
    jQuery(this.myModal.nativeElement).modal('show');

  }

  inputFocus() {

    this.queryErrorText = '';
  }

  checkStatus(v) {
    console.log(v);
  }

  Confirm() {
    jQuery(this.myModal.nativeElement).modal('hide');
    this.queryService.queryPatientDetail(this.currentPatientId)
    .subscribe(
      data => {
         const mydata = data.json();
         console.log(mydata);
         this.queryDetails = {data: mydata};
         jQuery(this.myhosi.nativeElement).modal('show');
      },
      // err => console.log(err),
      // () => console.log('done')
    );
  }

  Cancel() {
    jQuery(this.myModal.nativeElement).modal('hide');
    this.currentPatientId = undefined;
  }

  closedata() {

    jQuery(this.myhosi.nativeElement).modal('hide');
  }


}
