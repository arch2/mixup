import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {
  public forecasts: WeatherForecast[];
  private test: any;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    //const test = '/mixup/api/'; //this obviously needs to be configured.
    const test = '/api/'; //this is for local
    //http.get<WeatherForecast[]>(`${test}weatherforecast`).subscribe(result => {
    //  this.forecasts = result;
    //}, error => console.error(error));
    http.get(`${test}weatherforecast`)
      .subscribe(result => {
        this.test = result;
      },
        error => console.error(error)
      );
  }
}

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}
