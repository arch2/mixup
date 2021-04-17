import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from 'src/app/library';
import { catchError, first, tap } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent implements OnInit {
  public test: any;
  public filtered: any;
  public filter: FormControl;

  constructor(private http: HttpClient, public cs: ConfigService) {
    this.filter = new FormControl('');
  }
  ngOnInit(): void {
    this.http.get(`${this.cs.Configuration.APIEndpoint}/db`).pipe(
      first(x => x !== null),
      catchError(e => { console.error(e); return e })
    ).subscribe(result => {
      this.test = result;
      this.filtered = this.test.Items
    });
    this.filter.valueChanges.pipe(
      tap(x => { this.filterValues(x); })
    ).subscribe();
  }
  filterValues(value: string) {
    this.filtered = this.test
  }
  CategoryName(id: number) {
    return this.test.Categories.find(x => x.CategoryId === id).CategoryName;
  }
}
