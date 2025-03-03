// project import
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-auth-login',
  imports: [RouterModule,ReactiveFormsModule,CommonModule],
  templateUrl: './auth-login.component.html',
  styleUrl: './auth-login.component.scss'
})
export class AuthLoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    // Initialize form group with validations
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  // Login method
  login(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;

      // Call AuthService to authenticate user
      if (this.authService.login(email, password)) {
        // Redirect on successful login
        this.router.navigate(['/dashboard']);
      } else {
        alert('Invalid credentials!');
      }
    }
  }

}
