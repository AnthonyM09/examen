import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { RegistrarUsuarioComponent } from './Components/registrar-usuario/registrar-usuario.component';

const routes: Routes = [
  //Si la ruta está en localhost lo va a redireccionar al login con la linea siguiente
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'registrar-usuario', component: RegistrarUsuarioComponent },
  { path: 'home', component: HomeComponent },
  //Si ingresamos una ruta inexistente nos va a redireccionar al login con la siguiente linea
  { path: '**', redirectTo: 'login', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
