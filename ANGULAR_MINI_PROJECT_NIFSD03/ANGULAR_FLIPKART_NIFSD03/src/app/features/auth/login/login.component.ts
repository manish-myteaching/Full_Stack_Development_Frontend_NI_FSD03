// src/app/auth/login/login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

// Define an interface for the login model
interface LoginModel {
  username: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  model: LoginModel = { username: '', password: '' }; // Initialize with empty strings
  errorMessage: string | null = null;
  isLoading = false; // Add loading state
  isExist=false;
  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(): void {
    this.isLoading = true; // Set loading state to true
    this.errorMessage = null; // Reset error message

    this.isExist=this.authService.login(this.model.username, this.model.password);
    this.authService.currentUser$.subscribe(
        success => {
          this.isLoading = false; // Reset loading state
          if (this.isExist) {
            this.router.navigate(['/product/products']); // Redirect to a protected route
          } else {
            this.errorMessage = 'Login failed. Please try again.';
          }
        },
        error => {
          this.isLoading = false; // Reset loading state
          this.errorMessage = 'An error occurred during login. Please try again later.';
          console.error('Login error', error); // Log error for debugging
        }
      );
  }
}
