import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirebaseErrorAlertService {

  constructor() { }

  firebaseError(code: string) {

    switch (code) {
      //Cuando el correo está registrado
      case 'auth/email-already-in-use':
        return 'El correo ya está en uso'
      //Cuando la contraseña es muy corta
      case 'auth/weak-password':
        return 'La contraseña es muy debil'
      //Cuando el correo es invalido  
      case 'auth/invalid-email':
        return 'El correo es invalido'
      //Cuando la contraseña es incorrecta  
      case 'auth/wrong-password':
        return 'Contraseña incorrecta'
      //Cuando el correo no está registrado 
      case 'auth/user-not-found':
        return 'El correo no está registrado'
      default:
        return 'Error desconocido'
    }

  }
}
