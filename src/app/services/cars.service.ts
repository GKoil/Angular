import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car } from './car.type';
import { Constants } from '../constants';
import { CarPost } from '@services/carPost.type';
import { Observable } from 'rxjs';
import { ModelType } from '@services/model.type';

@Injectable({
  providedIn: 'root',
})
export class CarsService {
  isLoading = false;

  constructor(private http: HttpClient) {}

  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(`${Constants.URL}/cars`);
  }

  getModels(): Observable<ModelType[]> {
    return this.http.get<ModelType[]>(`${Constants.URL}/models`);
  }

  addCar(): Observable<Car> {
    // TODO: на вход принимат Car
    const newCar: CarPost = {
      name: 'name1',
      modelId: 1,
      color: 'red',
      image: 'image1',
      year: 1,
    };

    return this.http.post<Car>(`${Constants.URL}/cars`, newCar);
  }

  removeCar(id: number): Observable<void> {
    return this.http.delete<void>(`${Constants.URL}/cars/${id}`);
  }

  changeCar(car: CarPost & { id: number }): Observable<Car> {
    return this.http.put<Car>(`${Constants.URL}/cars/`, car);
  }
}
