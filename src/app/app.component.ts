import { Component, OnInit } from '@angular/core';
import { CarsService } from './services/cars.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  cars: any[] = [];

  title = 'g-mate-front';

  constructor(private carsService: CarsService) {}

  ngOnInit() {
    const newCars = this.carsService.getCars();
    newCars.subscribe((response) => (this.cars = response));
  }

  removeCar(carId: number) {
    this.cars = this.cars.filter(({ id }: any) => id !== carId);
  }
}
