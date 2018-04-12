import { Injectable } from '@angular/core';

@Injectable()
export class AppService {

  private localStorageUsernameKey: string = "userName";
  private filterValue: string = "";
  private userName: string = this.getUserNameFromStorage();

  constructor() {}

  public getFilter(): string {
    return this.filterValue;
  }

  public setFilter(value: string): void {
    this.filterValue = value;
  }

  public getUserName() : string {
    return this.userName;
  }

  public login(userName: string): void {
    if(userName == null) return;
    this.setUserNameFromStorage(userName);
    this.userName = this.getUserNameFromStorage();
  }

  private getUserNameFromStorage(): string {
    return localStorage.getItem(this.localStorageUsernameKey);
  }

  private setUserNameFromStorage(userName: string): void {
    localStorage.setItem(this.localStorageUsernameKey, userName);
  }
}
