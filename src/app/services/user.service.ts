import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  private localStorageUsernameKey: string = "userName";
  
  constructor() { }

  public isLogin() : boolean {
    return Boolean(this.getUserNameFromStorage());
  }

  public login(userName: string): void {
    if(userName == null) return;
    this.setUserNameFromStorage(userName);
  }

  public logout(): Promise<any> {
    return Promise.resolve()
      .then(() => {
        this.setUserNameFromStorage("");
      });
  }

  public getUserName(): string {
    return this.getUserNameFromStorage();
  }

  private getUserNameFromStorage(): string {
    return localStorage.getItem(this.localStorageUsernameKey);
  }

  private setUserNameFromStorage(userName: string): void {
    localStorage.setItem(this.localStorageUsernameKey, userName);
  }
}
