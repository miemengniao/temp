import { QueryService } from './../services/query.service';
import { Component, OnInit , ViewChild } from '@angular/core';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.css']
})
export class StatisticComponent implements OnInit {
  percentageValue: (value: number) => string;
  
    gaugeValues: any = {
      1: 100,
      2: 50,
      3: 50,
      4: 50,
      5: 50,
      6: 50
    };
  
    interval: number;

  queryInToday: any;
  positiveInToday: any;
  positiveInMonth: any;
  
  constructor(private queryService: QueryService) {
    this.percentageValue = function(value: number): string {
      return `${Math.round(value)} `;
    };
    this.queryInToday = [
      ['Label', 'Value'],
      ['今日查询', 0]
    ];
    this.positiveInToday = [
      ['Label', 'Value'],
      ['今日阳性次数', 0]
    ];
    this.positiveInMonth = [
      ['Label', 'Value'],
      ['本月阳性次数', 0]
    ];
  }
  ngOnInit() {
    const updateValues: Function = (): void => {
      this.gaugeValues =  {
        1: Math.round(Math.random() * 100),
        2: Math.round(Math.random() * 100),
        3: Math.round(Math.random() * 100),
        4: Math.round(Math.random() * 100),
        5: Math.round(Math.random() * 200),
        6: Math.round(Math.random() * 100)
      };
    }

    this.queryService.QueryInToday()
    .subscribe(
      data => 
      {
        this.gaugeValues[1] = data.json();
        this.queryInToday = [
          ['Label', 'Value'],
          ['今日查询',  data.json()]
        ];
      
      },
      // err => console.log(err),
      // () => console.log('done')
    );
    this.queryService.MatchInToday()
    .subscribe(
      data =>  
      {
        this.gaugeValues[2] = data.json();
        this.positiveInToday = [
          ['Label', 'Value'],
          ['今日阳性次数',  data.json()]
        ];
        
       
      },
      // err => console.log(err),
      // () => console.log('done')
    );
    this.queryService.MatchInMonth()
    .subscribe(
      data =>  
      {
        this.gaugeValues[3] = data.json();
        this.positiveInMonth = [
          ['Label', 'Value'],
          ['本月阳性次数',  data.json()]
        ];
        
      },
      // err => console.log(err),
      // () => console.log('done')
    );
  }
}
