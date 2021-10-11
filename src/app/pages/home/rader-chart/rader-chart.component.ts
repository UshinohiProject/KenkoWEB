import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartType, RadialChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import { HttpClientService } from './../../../services/http-client.service';

@Component({
  selector: 'app-rader-chart',
  templateUrl: './rader-chart.component.html',
  styleUrls: ['./rader-chart.component.css']
})
export class RaderChartComponent implements OnInit {

  public radarChartOptions: RadialChartOptions = {
    responsive: true,
  };
  public radarChartLabels: Label[] = ['慢性腎臓病', '胃がん', '動脈硬化',
    'ストレス', '生活習慣病', '肝障害', '骨粗鬆症'];

  public radarChartData: ChartDataSets[] = [
    { data: [0, 1, 2, 3, 4, 5, 6], label: '予測される健康被害' }
  ];

  public radarChartType: ChartType = 'radar';

  public apiData:any = [];
  param:any = [];

  
  constructor(private client:HttpClientService) { }

  ngOnInit(): void {

    this.client.get((response: any) => {
            this.param = response.body; 
            this.apiData = this.param;

            // 以下の処理は非公開
    });
  }
  
}
