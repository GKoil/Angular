import { Component, OnInit } from '@angular/core';
import { CarsService } from '@services/cars.service';
import { Car } from '@services/car.type';
import { Constants } from '@app/constants';

@Component({
  selector: 'app-list-cars',
  templateUrl: './list-cars.component.html',
})
export class ListCarsComponent implements OnInit {
  processingCar = ({
    id,
    name = '',
    color = '',
    image = '',
    year,
    model,
  }: Car) => ({
    id,
    name,
    color,
    image: `${Constants.URL}/images/${image}`,
    year,
    model,
  });

  cars: Car[] = [];

  constructor(private carsService: CarsService) {}

  ngOnInit() {
    const newCars = this.carsService.getCars();
    newCars.subscribe(
      (response) => (this.cars = response.map(this.processingCar))
    );
  }

  removeCar(carId: number) {
    this.cars = this.cars.filter(({ id }: any) => id !== carId);
  }
}
