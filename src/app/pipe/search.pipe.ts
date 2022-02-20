import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '@services/car.type';

@Pipe({
  name: 'search',
  pure: true,
})
export class SearchPipe implements PipeTransform {
  transform(cars: Car[], value: string) {
    return cars.filter(({ name }) =>
      name.toLowerCase().includes(value.toLowerCase())
    );
  }
}
