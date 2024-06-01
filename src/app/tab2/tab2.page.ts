import { Component, OnInit } from '@angular/core';
import { WeatherService, Forecast} from '../services/weather.service';
import { DatePipe } from '@angular/common';
import { NavigationExtras } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  providers: [DatePipe]
})
export class Tab2Page implements OnInit {
  forecast: Forecast = {
    list: []
  };
  whList: any[] = [];
  city: string = 'Sleman';

  constructor(private weatherService: WeatherService, private datePipe: DatePipe, private router: Router) {}

  ngOnInit(): void {
    this.weatherService.getDatalist().subscribe(
      result => {
        this.forecast = result;
        this.whList = this.forecast.list;
        console.log(this.forecast);
      }
    )
  }

  formatDate(dateString: string): string {
    return this.datePipe.transform(dateString, "dd MMM - hh a")!;
  }

  detailpage(weatherData: any) { // rename parameter to weatherData
    let data = { // rename variable to data
      date: weatherData.dt_txt,
      temp: weatherData.main.temp,
      main: weatherData.weather[0].main,
      desc: weatherData.weather[0].description,
      icon: weatherData.weather[0].icon
    };

    let extras: NavigationExtras = {
      state: {
        data: data
      }
    };

    this.router.navigate(['/detail'], extras);

    // add your navigation logic here
  }
}