import { ModelType } from '@services/model.type';

const mapIdModel = (models: ModelType[], needName: string): number => {
  const mapObj = models.find(({ name }) => name === needName);
  return mapObj ? mapObj.id : -1;
};

export default mapIdModel;
