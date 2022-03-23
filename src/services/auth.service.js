import moment from 'moment';

class AuthService {
  async signUp(usuario) {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.push({ usuario });
    localStorage.setItem('accsstkn', JSON.stringify(1));
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('usr', JSON.stringify(usuario));
    localStorage.setItem('timeOut', moment().add(45, 'minutes'));
    return Promise.resolve(usuario);
  }

  async login(usuario) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userFound = users.find((el) => el.usuario.correo === usuario.correo);

    if (userFound && userFound.usuario.psw === usuario.psw) {
      localStorage.setItem('accsstkn', JSON.stringify(1));
      localStorage.setItem('usr', JSON.stringify(userFound.usuario));
      localStorage.setItem('timeOut', moment().add(45, 'minutes'));

      return Promise.resolve(userFound.usuario);
    } else return Promise.reject('Access denied');
  }

  async chngPsw(usuario) {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    const userFound = users.find((el) => el.usuario.correo === usuario.correo);
    console.log({userFound});
    let userFoundToUpdate = users.indexOf(userFound);

    console.log({userFoundToUpdate});

    if (userFoundToUpdate > -1) {
      console.log(users[userFoundToUpdate]);
      users[userFoundToUpdate].usuario.psw = usuario.psw;
      localStorage.setItem('users', JSON.stringify(users));

      return Promise.resolve(userFound.usuario);
    } else return Promise.reject('User account not found');
  }

  logout() {
    localStorage.removeItem('accsstkn');
    localStorage.removeItem('timeOut');
    localStorage.removeItem('usr');
  }
}

export default new AuthService();
