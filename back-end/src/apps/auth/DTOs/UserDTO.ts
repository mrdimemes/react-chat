import { UserModel } from "../models";

class UserDTO {
  name: string;
  email: string;
  id: number;

  constructor(model: UserModel) {
    this.id = model.user_id;
    this.name = model.name;
    this.email = model.email;
  }
}

export default UserDTO;