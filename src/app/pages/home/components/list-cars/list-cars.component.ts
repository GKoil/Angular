import { Component, OnInit } from '@angular/core';
import { CarsService } from '@services/cars.service';
import { Car } from '@services/car.type';
import { processingCar } from '@services/processing/processing-car';

@Component({
  selector: 'app-list-cars',
  templateUrl: './list-cars.component.html',
})
export class ListCarsComponent implements OnInit {
  cars: Car[] = [];

  constructor(private carsService: CarsService) {}

  ngOnInit() {
    const newCars = this.carsService.getCars();
    newCars.subscribe((response) => (this.cars = response.map(processingCar)));
  }

  removeCar(carId: number) {
    this.cars = this.cars.filter(({ id }) => id !== carId);
  }

  updateCar(car: Car) {
    const { id: changedId } = car;
    const changedCarIndex = this.cars.findIndex(({ id }) => id === changedId);
    // TODO: Лучше использовать lodash для копирования, не модифицируя массив
    this.cars.splice(changedCarIndex, 1, car);
  }

  addCar(car: Car) {
    this.cars = [...this.cars, car];
  }
}
