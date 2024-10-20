import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  email = '';
  password = '';
  role = 'alumno';  // Valor predeterminado

  constructor(private authService: AuthService, private router: Router) {}

  onRegister() {
    this.authService.registerUser(this.email, this.password, this.role)
      .then(() => {
        // Redirige a la página principal después de registrarse
        this.router.navigate(['/home']);
      })
      .catch(err => console.log(err));
  }
}
