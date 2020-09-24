import { SourceModel } from './source.model';
import { parseXml } from '../utils/parse.utils';

export class SecondSourceModel extends SourceModel {
  getEurValue() {
    const valutes = parseXml(this.data).ValCurs.Valute;
    return valutes.find(valute => valute.CharCode[0] === 'EUR').Value[0];
  }
}
