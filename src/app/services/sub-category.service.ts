import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API } from '../constant/environment';

@Injectable({
  providedIn: 'root'
})
export class SubCategoryService {

  constructor(private http: HttpClient) { }

  get(id: any) {
    return this.http.get<any[]>(API.api + API.methods.SubCategory + `/GetSubByCateoryId/${id}`, { withCredentials: true })
  }
}
