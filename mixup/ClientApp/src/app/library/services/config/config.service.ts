import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Configuration } from '../../models';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  Configuration: Configuration;
  constructor(private http: HttpClient) {
    this.Configuration = new Configuration();
  }
  loadConfig() {
    return new Promise((resolve) => {
      if (!environment.production) {
        resolve(true);
      }
      else {
        this.http.get('./assets/config.json').subscribe((response: Configuration) => {
          this.Configuration = new Configuration(response);
          resolve(true);
        }, err => {
          console.error(err);
        })
      }
    });
  }
}
