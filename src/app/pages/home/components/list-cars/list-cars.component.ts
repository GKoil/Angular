import { Component, OnInit } from '@angular/core';
import { CarsService } from '@services/cars.service';
import { Car } from '@services/car.type';

@Component({
  selector: 'app-list-cars',
  templateUrl: './list-cars.component.html',
})
export class ListCarsComponent implements OnInit {
  cars: Car[] = [];

  constructor(private carsService: CarsService) {}

  ngOnInit() {
    const newCars = this.carsService.getCars();
    newCars.subscribe((response) => (this.cars = response));
  }

  removeCar(carId: number) {
    this.cars = this.cars.filter(({ id }: any) => id !== carId);
  }
}
