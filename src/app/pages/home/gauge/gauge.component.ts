import { Component, OnInit } from '@angular/core';
import { HttpClientService } from './../../../services/http-client.service';

@Component({
  selector: 'app-gauge',
  templateUrl: './gauge.component.html',
  styleUrls: ['./gauge.component.css']
})
export class GaugeComponent implements OnInit {

    gaugeValueSugar = 0;
    gaugeLabelSugar = "砂糖";
    gaugeAppendTextSugar = "g";

    gaugeValueSalt = 0;
    gaugeLabelSalt = "塩";
    gaugeAppendTextSalt = "g";

    param:any = {};
    apiData:any = {};

  constructor(private client:HttpClientService) { }

  ngOnInit(): void {

            this.client.get((response: any) => {
            this.param = response.body;
            this.apiData = this.param;

            //以下の処理は非公開
         });  
    }
    ngOnDestroy(){}

}

