export default class UserDTO {
  constructor(nicNumber, username, email, confirm_password) {
    this._nicNumber = nicNumber;
    this._username = username;
    this._email = email;
    this._confirm_password = confirm_password;
  }

  get nicNumber() {
    return this._nicNumber;
  }

  set nicNumber(value) {
    this._nicNumber = value;
  }

  get username() {
    return this._username;
  }

  set username(value) {
    this._username = value;
  }

  get email() {
    return this._email;
  }

  set email(value) {
    this._email = value;
  }

  get confirm_password() {
    return this._confirm_password;
  }

  set confirm_password(value) {
    this._confirm_password = value;
  }

  printUserDTO() {
    console.log(
      'UserDTO { nicNumber : ' +
        this._nicNumber +
        ' , username : ' +
        this._username +
        ' , email : ' +
        this._email +
        ' , password : ' +
        this._confirm_password +
        ' }',
    );
  }
}
