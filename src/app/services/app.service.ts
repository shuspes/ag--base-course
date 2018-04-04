import { Injectable } from '@angular/core';

@Injectable()
export class AppService {

  private filterValue: string = "";

  constructor() { }

  public getFilter() {
    return this.filterValue;
  }

  public setFilter(value: string) {
    this.filterValue = value;
  }
}
