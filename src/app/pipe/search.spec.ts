import { SearchPipe } from '@app/pipe/search.pipe';

const CARS = [{ name: 'Audi' }, { name: 'BMW' }];

describe('test pipe search', () => {
  const pipe = new SearchPipe();

  it('should all CARS', () => {
    expect(pipe.transform(CARS, '')).toEqual(CARS);
  });

  it('should empty', () => {
    expect(pipe.transform(CARS, 'l')).toEqual([]);
  });

  it('should all car', () => {
    expect(pipe.transform(CARS, 'au')).toEqual([CARS[0]]);
  });
});
