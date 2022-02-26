class UserDTO {
  email;
  id;
  isActivated;

  constructor(model) {
    this.id = model.user_id;
    this.name = model.name;
    this.email = model.email;
  }
}


export default UserDTO;