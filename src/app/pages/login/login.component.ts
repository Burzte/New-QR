import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email: string = '';  // Correo del usuario
  password: string = '';  // Contraseña del usuario

  constructor(private authService: AuthService, private router: Router) {}

  // Inicia sesión usando el servicio de autenticación
  onLogin() {
    this.authService.loginUser(this.email, this.password)
      .then(() => {
        this.router.navigate(['/alumno']);  // Redirige al área de alumnos
      })
      .catch(err => console.log(err));
  }
}
