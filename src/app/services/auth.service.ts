import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    private router: Router
  ) {}

  // Registro de usuario
  registerUser(email: string, password: string, role: string) {
    return this.afAuth.createUserWithEmailAndPassword(email, password)
      .then(userCredential => {
        const userId = userCredential.user?.uid;
        // Guarda los datos adicionales en Firestore
        return this.firestore.collection('users').doc(userId).set({
          email,
          role  // Puede ser "docente" o "alumno"
        });
      });
  }

  // Inicio de sesión
  loginUser(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  // Cerrar sesión
  logoutUser() {
    return this.afAuth.signOut().then(() => {
      this.router.navigate(['/login']);
    });
  }

  // Verificar si un usuario está autenticado
  isLoggedIn() {
    return this.afAuth.authState;
  }

  // Obtener datos del usuario actual
  getUserData() {
    return this.afAuth.authState;
  }
}
