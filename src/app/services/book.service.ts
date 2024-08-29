import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API } from '../constant/environment';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  getBySubId(subId: number) {
    return this.http.get(API.api + API.methods.Books + `/BySubId/${subId}`, { withCredentials: true });
  }
}
