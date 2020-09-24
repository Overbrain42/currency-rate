import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { RequestService } from './services/request.service';
import { tap } from 'rxjs/operators';
import { resourcesList } from './static/resources-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Currency exchange rate';
  resources = resourcesList;
  rate = 'pending';
  requestInterval = 10 * 1000;

  constructor(
    private _requestService: RequestService
  ) {
  }

  ngOnInit() {
    this.makeRequest(0);
    interval(this.requestInterval)
      .pipe(
        tap(() => this.makeRequest(0))
      )
      .subscribe();

  }

  makeRequest(resourceIndex) {
    this.getExchageRates(resourceIndex).subscribe(res => {
      this.rate = res;
    }, err => {
      if (resourceIndex + 1 < this.resources.length) {
        this.makeRequest(resourceIndex + 1);
      } else {
        this.rate = 'error retrieving data';
      }
    });
  }

  getExchageRates(resourceIndex) {
    return this._requestService.getCurrencyExchangeRate(this.resources[resourceIndex]);
  }
}
