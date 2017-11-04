import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.css']
})
export class StatisticComponent implements OnInit {
  queryInToday: any;
  positiveInToday: any;
  positiveInMonth: any;
  constructor() {
    this.queryInToday = [
      ['Label', 'Value'],
      ['今日查询', 8]
    ];
    this.positiveInToday = [
      ['Label', 'Value'],
      ['今日阳性次数', 5]
    ];
    this.positiveInMonth = [
      ['Label', 'Value'],
      ['本月阳性次数', 38]
    ];
  }
  ngOnInit() { }
}
