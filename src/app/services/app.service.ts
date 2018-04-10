import { Injectable } from '@angular/core';

@Injectable()
export class AppService {

  private filterValue: string = "";

  constructor() { }

  public getFilter(): string {
    return this.filterValue;
  }

  public setFilter(value: string): void {
    this.filterValue = value;
  }
}
