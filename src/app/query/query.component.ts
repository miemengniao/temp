import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
declare var jQuery: any;

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryComponent implements OnInit {

  currentDate : Date = new Date();
  abcd = 'amexio-grid-headers';
  @ViewChild('myModal') myModal: ElementRef;
  @ViewChild('hosiptalResult') myhosi: ElementRef;

  flag = false;

  constructor() {
    
  }

  ngOnInit() { }

  
  Query() {
    this.flag = !this.flag;
    console.log(this.flag);
  }

  Reset() {
    console.log('a');
    jQuery(this.myModal.nativeElement).modal('show');
  }

  checkStatus(v) {
    console.log(v);
  }

  Confirm() {
    jQuery(this.myModal.nativeElement).modal('hide');
    console.log('a');
    jQuery(this.myhosi.nativeElement).modal('show');
  }

  Cancel() {
    jQuery(this.myModal.nativeElement).modal('hide');
    console.log('b');
  }

  closedata() {
    
    jQuery(this.myhosi.nativeElement).modal('hide');
  }


}
