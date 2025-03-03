import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor() { }

  // Check if user is logged in (e.g., by checking localStorage or a token)
  isLoggedIn(): boolean {
    // This is just a simple check based on localStorage
    return !!localStorage.getItem('user');  // Change this logic if you're using a different method
  }

  // Simulate a login method (you can replace this with an actual API call)
  login(username: string, password: string): boolean {
    // Simulate saving user info to localStorage (in a real app, you'd probably use an API)
    localStorage.setItem('user', JSON.stringify({ username }));
    return true;
  }

  // Simulate a logout method
  logout(): void {
    localStorage.removeItem('user');
  }
}
