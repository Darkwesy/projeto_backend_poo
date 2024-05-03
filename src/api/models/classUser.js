class UserClass {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  getEmail() {
    return this.email;
  }

  setEmail(newEmail) {
    this.email = newEmail;
  }
}

export default UserClass;
