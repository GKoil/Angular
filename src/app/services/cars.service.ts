import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  items = [];

  constructor(
    private http: HttpClient
  ) {}

  getCars() {
    return this.http.get<{id: number, name: string, model: {id: number, name: string}, color: string, year: number, image: string}[]>('http://localhost:3000/cars');
  }
}
