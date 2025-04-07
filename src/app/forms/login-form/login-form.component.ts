import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent {
  login = {
    email: '',
    password: ''
  }

  private authService = inject(AuthService)
  private router = inject(Router)

  onSubmit = (form: NgForm): void => {
    if (form.valid) {
      this.authService.login(this.login.email, this.login.password).subscribe({
        next: (resp) => this.router.navigate(['/profile']),
        error: (err) => {
          alert('Une erreur est survenue.');
          console.log("Error: ", err);
        },
      });
    }
  }
}
