import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Details } from '../models/details.model';

const baseUrl = 'http://localhost:8080/api/peoples';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Details[]> {
    return this.http.get<Details[]>(baseUrl);
  }

  get(id: any): Observable<Details> {
    return this.http.get<Details>(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(first: any): Observable<Details[]> {
    return this.http.get<Details[]>(`${baseUrl}?first=${first}`);
  }

}
