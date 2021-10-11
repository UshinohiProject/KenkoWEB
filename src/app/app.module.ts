import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';

import { HttpClientService } from './services/http-client.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule } from 'ng2-charts'; // for line-chart
import { NgxGaugeModule } from 'ngx-gauge';// for gauge
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ErrorComponent } from './pages/error/error.component';
import { GaugeComponent } from './pages/home/gauge/gauge.component';
import { LineChartComponent } from './pages/home/line-chart/line-chart.component';
import { RaderChartComponent } from './pages/home/rader-chart/rader-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    GaugeComponent,
    LineChartComponent,
    RaderChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ChartsModule,
    NgxGaugeModule,

  ],
  providers: [
    HttpClientService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
