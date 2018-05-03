import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  private localStorageUsernameKey: string = "userName";
  private userName: string = this.getUserNameFromStorage();
  
  constructor() { }

  public isLogin() : boolean {
    return Boolean(this.getUserNameFromStorage());
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
