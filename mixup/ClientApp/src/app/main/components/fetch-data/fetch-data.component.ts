import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from 'src/app/library';
import { catchError, first, map } from 'rxjs/operators';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {
  public forecasts: WeatherForecast[];
  public test: any;
  public filtered: any;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string, public cs: ConfigService) {
    //const test = '/mixup/api/'; //this obviously needs to be configured.
    // const test = '/api/'; //this is for local
    const test = this.cs.Configuration.APIEndpoint;
    //http.get<WeatherForecast[]>(`${test}weatherforecast`).subscribe(result => {
    //  this.forecasts = result;
    //}, error => console.error(error));
    const full = `${test}/db`;
    console.log('full', full);
    http.get(full).pipe(
      first(x => x !== null),
      catchError(e => { console.error(e); return e })
    ).subscribe(result => {
      this.test = result;
      this.filtered = this.test.Items
    });
  }
  CategoryName(id: number) {
    return this.test.Categories.find(x => x.CategoryId === id).CategoryName;
  }
}

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}
