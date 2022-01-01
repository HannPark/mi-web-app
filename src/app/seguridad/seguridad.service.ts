import { Usuario } from './usuario.model';
import { LoginData } from './login-data.model';

export class SeguridadService {
  private usuario: Usuario;

  registrarUsuario(usr: Usuario) {
    this.usuario = {
      email: usr.email,
      usuarioId: Math.round(Math.random() * 10000).toString(),
      nombre: usr.nombre,
      apellidos: usr.apellidos,
      username: usr.username,
      password: ''
    };
  }

  login(loginData: LoginData) {
    this.usuario = {
      email: loginData.email,
      usuarioId: Math.round(Math.random() * 10000).toString(),
      nombre: '',
      apellidos: '',
      username: '',
      password: ''
    };
  }

  salirSesion() {
    this.usuario = null;
  }

  obtenerUsuario() {
    return { ...this.usuario };
  }
}
