import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from 'src/app/library';
import { catchError, first, startWith, tap } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { FullDB, Item } from '../../models';
import { merge } from 'rxjs';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent implements OnInit {
  public db: FullDB;
  public filtered: Item[];
  public filter: FormControl;
  public category: FormControl;

  constructor(private http: HttpClient, public cs: ConfigService) {
    this.filter = new FormControl('');
    this.category = new FormControl('');
  }
  ngOnInit(): void {
    this.http.get(`${this.cs.Configuration.APIEndpoint}/db`).pipe(
      first(x => x !== null),
      catchError(e => { console.error(e); return e })
    ).subscribe((result: FullDB) => {
      this.db = result;
      this.db.Categories[0].CategoryName
      this.filter.setValue('');
    });
    merge(
      this.filter.valueChanges,
      this.category.valueChanges
    ).pipe(
      tap(x => { this.filterValues(); })
    ).subscribe();
  }
  filterValues() {
    const filterText = this.filter.value;
    const filterCategory = this.category.value;
    this.filtered = this.db.Items
      .filter(x => x.CategoryId == filterCategory)
      .filter(x => Object.keys(x).some(k => x[k].toString().toLowerCase().includes(filterText.toLowerCase())))
      .sort((x, y) => x.Id - y.Id);
  }
  CategoryName(id: number) {
    return this.db.Categories.find(x => x.CategoryId === id).CategoryName;
  }
}
