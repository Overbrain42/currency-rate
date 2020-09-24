export function parseXml(xmlStr) {
  let result;
  const parser = require('xml2js');
  parser.Parser().parseString(xmlStr, (e, r) => { result = r; });
  return result;
}
