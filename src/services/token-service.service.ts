import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenServiceService {

  private TOKEN_KEY = 'auth-token';

  constructor() { }

  private isLoggedIn = false;

  private isLocalStorageAvailable(): boolean {
    return typeof localStorage !== 'undefined';
  }

  saveToken(token: string): void {
    if (this.isLocalStorageAvailable()) {
      localStorage.setItem(this.TOKEN_KEY, token);
      this.isLoggedIn = true;
    }
  }

  getToken(): string | null {
    return this.isLocalStorageAvailable() ? localStorage.getItem(this.TOKEN_KEY) : null;
  }

  removeToken(): void {
    if (this.isLocalStorageAvailable()) {
      localStorage.removeItem(this.TOKEN_KEY);
      this.isLoggedIn = false;
    }
  }

  isAuthenticated(): boolean {
    return this.getToken() !== null;
  }
}
