import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { HttpClientService } from './../../../services/http-client.service';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class LineChartComponent implements OnInit {


    //public lineChartData: ChartDataSets[] = [];
    public lineChartLabels: Label[] = [];
    public lineChartOptions = { responsive: true,};
    public lineChartLegend = true;
    public lineChartType:ChartType = 'line';
    public lineChartPlugins = [];



    param:any = {};
    apiData:any = [];
    public newEntry:any = [];

    readonly MAX_NUM_DATA:number = 7; 

    timeStampList:Label[] = [];
    sugarList:any[] = [];
    saltList:any[] = []; 


    lineChartData:ChartDataSets[] = 
    [
      {"data": [], label: '砂糖'},
       {"data":[], label: '塩'}
    ];
   

  constructor(private client:HttpClientService) { }

   ngOnInit(): void {

    this.client.get((response: any) => {
            this.param = response.body; 
            this.apiData = this.param;

            //以下の処理は非公開

            });
  }

  unixtimeToDate(unixTime:number): string{
    let dateTime:Date = new Date(unixTime * 1000);
    return dateTime.toLocaleDateString('ja');
  }
}
