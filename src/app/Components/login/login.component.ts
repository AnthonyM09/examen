import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FirebaseErrorAlertService } from 'src/app/servicios/firebase-error-alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUsuario: FormGroup;

  constructor(
    private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private toastr: ToastrService,
    private router: Router,
    private firebaseError: FirebaseErrorAlertService,
  ){
    this.loginUsuario = this.fb.group({
      correo: ['', Validators.required],
      contraseña: ['', Validators.required],
    })
  }

  ngOnInit(): void { }

  login(){
    const correo = this.loginUsuario.value.correo;
    const contraseña = this.loginUsuario.value.contraseña;

    this.afAuth.signInWithEmailAndPassword(correo, contraseña).then((user) => {
      this.toastr.success('Ingreso exitoso', 'Felicidades!!')
      this.router.navigate(['/home']);
    } ).catch((error) => {
      console.log(error);
      this.toastr.error(this.firebaseError.firebaseError(error.code), 'Error:')
    });
  }
}
