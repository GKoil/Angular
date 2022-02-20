import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  pure: true,
})
export class SearchPipe implements PipeTransform {
  transform<V extends { name: string }>(values: V[], value: string) {
    return values.filter(({ name }) =>
      name.toLowerCase().includes(value.toLowerCase())
    );
  }
}
