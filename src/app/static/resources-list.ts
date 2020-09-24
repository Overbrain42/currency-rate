import { FirstSourceModel } from '../models/first-source.model';
import { SecondSourceModel } from '../models/second-source.model';

export const resourcesList = [
  {
    resource: 'https://www.cbr-xml-daily.ru/daily_json.js',
    model: FirstSourceModel,
    type: 'json'
  },
  {
    resource: 'https://www.cbr-xml-daily.ru/daily_utf8.xml',
    model: SecondSourceModel,
    type: 'xml'
  },
];
