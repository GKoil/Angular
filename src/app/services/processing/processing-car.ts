import { Car } from '@services/car.type';
import { Constants } from '@app/constants';

export const processingCar = ({
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
