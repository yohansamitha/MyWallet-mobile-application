export default class UserServices {
  baseUrl = 'http://dce87c783636.ngrok.io';
  async signUp(userDTO) {
    console.log('testing user method');
    console.log('props data ', userDTO);
    console.log('props data ', userDTO.username);

    const date = new Date();
    return fetch(this.baseUrl + '/api/v1/userRoute/registerUser', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nicNumber: userDTO.nicNumber,
        username: userDTO.username,
        email: userDTO.email,
        password: userDTO.confirm_password,
        regDate: date,
        regTime:
          date.getHours() + '-' + date.getMinutes() + '-' + date.getSeconds(),
        userState: true,
      }),
    });
  }

  async signIn(email, password) {
    console.log('props data ', email, password);
    return fetch(this.baseUrl + '/api/v1/userRoute/login', {
      method: 'get',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        email: email,
        password: password,
      },
    });
  }
}
