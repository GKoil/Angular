import { Component, OnInit } from '@angular/core';
import { CarsService } from '@services/cars.service';
import { Car } from '@services/car.type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  cars: Car[] = [];

  contentTitle = 'Cars List';

  constructor(private carsService: CarsService) {}

  ngOnInit() {
    const newCars = this.carsService.getCars();
    newCars.subscribe((response) => (this.cars = response));
  }

  removeCar(carId: number) {
    this.cars = this.cars.filter(({ id }: any) => id !== carId);
  }
}
