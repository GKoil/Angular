import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car } from './car.type';

@Injectable({
  providedIn: 'root',
})
export class CarsService {
  constructor(private http: HttpClient) {}

  getCars() {
    return this.http.get<Car[]>('http://localhost:3000/cars');
  }
}
