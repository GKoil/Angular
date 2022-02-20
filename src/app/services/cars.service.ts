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

  addCar(car: CarPost): Observable<Car> {
    const formData = new FormData();
    formData.append('image', car.image);
    formData.append('name', car.name);
    formData.append('modelId', car.modelId.toString());
    formData.append('color', car.color);
    formData.append('year', car.year.toString());

    return this.http.post<Car>(`${Constants.URL}/cars`, formData);
  }

  removeCar(id: number): Observable<void> {
    return this.http.delete<void>(`${Constants.URL}/cars/${id}`);
  }

  changeCar(car: CarPost & { id: number }): Observable<Car> {
    const formData = new FormData();
    formData.append('image', car.image);
    formData.append('name', car.name);
    formData.append('modelId', car.modelId.toString());
    formData.append('color', car.color);
    formData.append('year', car.year.toString());
    formData.append('id', car.id.toString());

    return this.http.put<Car>(`${Constants.URL}/cars/`, formData);
  }
}
