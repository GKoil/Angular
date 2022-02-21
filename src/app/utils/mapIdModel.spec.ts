import mapIdModel from '@app/utils/mapIdModel';
import { ModelType } from '@services/model.type';

const MODELS: ModelType[] = [
  { id: 1, name: 'Audi' },
  { id: 2, name: 'BMW' },
];

describe('test mapIdModel', () => {
  it('should not found', () => {
    expect(mapIdModel(MODELS, '')).toBe(-1);
  });

  it('should id', () => {
    expect(mapIdModel(MODELS, 'BMW')).toBe(2);
  });
});
