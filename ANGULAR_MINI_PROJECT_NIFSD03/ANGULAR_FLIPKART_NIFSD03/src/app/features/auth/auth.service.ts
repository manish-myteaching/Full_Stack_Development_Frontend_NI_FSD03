// src/app/auth/auth.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<string | null>(null);
  currentUser$ = this.currentUserSubject.asObservable();

  login(username: string, password: string): boolean {
    // Dummy logic for login
    if (username === 'user' && password === 'password') {
      this.currentUserSubject.next(username);
      return true;
    }
    return false;
  }

  register(username: string, password: string): void {
    // Dummy registration logic
    console.log(`Registered user: ${username}`);
  }

  logout() {
    this.currentUserSubject.next(null);
  }
}
