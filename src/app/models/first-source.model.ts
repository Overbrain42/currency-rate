import { SourceModel } from './source.model';

export class FirstSourceModel extends SourceModel {
  getEurValue() {
    return this.data.Valute.EUR.Value;
  }
}
