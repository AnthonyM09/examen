import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { FirebaseErrorAlertService } from 'src/app/servicios/firebase-error-alert.service';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})
export class RegistrarUsuarioComponent implements OnInit {
  registrarUsuario: FormGroup;

  constructor(private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private toastr: ToastrService,
    private router: Router,
    private firebaseError: FirebaseErrorAlertService,
  ) {
    this.registrarUsuario = this.fb.group({
      correo: ['', Validators.required],
      contraseña: ['', Validators.required],
      repetircontraseña: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  registrar() {
    const correo = this.registrarUsuario.value.correo;
    const contraseña = this.registrarUsuario.value.contraseña;
    const repetircontraseña = this.registrarUsuario.value.repetircontraseña;

    if (contraseña !== repetircontraseña) {
      this.toastr.error('La contraseña debe ser la misma', 'Error:');
      return;
    }

    this.afAuth.createUserWithEmailAndPassword(correo, contraseña).then((user) => {
      this.toastr.success('Registro exitoso', 'Felicidades!!')
      this.router.navigate(['/home']);
    }).catch((error) => {
      console.log(error);
      this.toastr.error(this.firebaseError.firebaseError(error.code), 'Error:')
    });
  }
}
