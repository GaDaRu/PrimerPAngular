import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ChuckService {
  private url = 'https://api.chucknorris.io/jokes/'

  private randomPath = 'random'
  private categoryPath = 'categories'
  private randomCategoryPath = 'random?category='
  private searchJakePath = 'search?query='
  constructor(private http: HttpClient) { }

  getCategory(): Observable<any> {
    return this.http.get<any>(this.url + this.categoryPath);
  }
  getRandomJokeChuck(): Observable<any> {
    return this.http.get<any>(this.url + this.randomPath);
  }

  getRandomCategory(category: string): Observable<any> {
    return this.http.get<any>(this.url + this.randomCategoryPath + category);
  }

  getJakeSearch(query: string): Observable<any> {
    return this.http.get<any>(this.url + this.searchJakePath + query);
  }
}
