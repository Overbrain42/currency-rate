import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs-compat/operators/map';

@Injectable()
export class RequestService {
  constructor(
    private _http: HttpClient
    ) {
  }

  getCurrencyExchangeRate(resource) {
    return this._http.get(resource.resource, {responseType: resource.type}).pipe(
      map(res => {
        const eurValue = new resource.model(res).getEurValue();
        return eurValue;
      })
    );
  }
}
