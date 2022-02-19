import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car } from './car.type';
import { Constants } from '../constants';

@Injectable({
  providedIn: 'root',
})
export class CarsService {
  constructor(private http: HttpClient) {}

  getCars() {
    return this.http.get<Car[]>(`${Constants.URL}/cars`);
  }
}
