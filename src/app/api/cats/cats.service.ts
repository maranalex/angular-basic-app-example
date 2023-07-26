import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { API, HEADERS } from './api.configuration';
import { Breed } from './cats-api.types';
import { Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CatsService {
  cachedBreeds: Breed[];
  constructor(private http: HttpClient) {}

  getBreeds(limit: number = 2, page: number = 0): Observable<Breed[]> {
    const options = {
      params: new HttpParams().set('limit', limit).set('page', page),
      headers: HEADERS,
    };
    if (this.cachedBreeds) {
      return of(this.cachedBreeds);
    }
    return this.http
      .get<Breed[]>(`${API}/breeds`, options)
      .pipe(tap((breeds) => (this.cachedBreeds = breeds)));
  }

  getImage(id: string): Observable<any> {
    return this.http.get(`${API}/${id}`);
  }
}
